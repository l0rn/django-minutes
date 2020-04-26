from django.contrib.auth.models import User
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import viewsets
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED
from rest_framework.viewsets import GenericViewSet

from minutes.filters import AgendaItemFilterSet, AgendaSubItemFilterSet, DecisionFilterSet, RollCallVoteFilterSet, \
    AnonymousVoteFilterSet
from minutes.models import MeetingSeries, AgendaMeetingItem, Decision, Meeting, Participant, \
    AgendaSubItem, MinutesUser, VoteChoice, RollCallVote, AnonymousVote, Invitation
from minutes.permissions import ParticipantReadOnly, MeetingOwnerReadWrite, Read, Create, \
    RelatedMeetingOwned, RelatedAgendaItemOwned, RelatedMeetingSeriesOwned

from minutes.serializers import UserSerializer, MeetingSeriesSerializer, MeetingSerializer, DecisionSerializer, \
    SubItemSerializer, AgendaItemSerializer, ParticipantSerializer, VoteChoiceSerializer, RollCallVoteSerializer, \
    AnonymousVoteSerializer, InvitationRequestSerializer


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [
        IsAdminUser
    ]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ParticipantViewSet(viewsets.ModelViewSet):
    permission_classes = [
        IsAuthenticated,
    ]
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer


class MeetingSeriesViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = MeetingSeries.objects.all()
    serializer_class = MeetingSeriesSerializer


class MeetingViewSet(viewsets.ModelViewSet):
    permission_classes = [
        IsAuthenticated & (ParticipantReadOnly | MeetingOwnerReadWrite | (RelatedMeetingSeriesOwned & Create))
    ]
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer

    def get_queryset(self):
        user = MinutesUser.from_user(self.request.user)
        return user.my_meetings()

    def perform_create(self, serializer):
        instance = serializer.save()
        instance.owners.add(self.request.user)


class DecisionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        IsAuthenticated & (ParticipantReadOnly | MeetingOwnerReadWrite)
    ]
    serializer_class = DecisionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = DecisionFilterSet

    def get_queryset(self):
        user = MinutesUser.from_user(self.request.user)
        return Decision.objects.filter(
            agenda_item__meeting__in=user.my_meetings()
        )


class AgendaItemViewSet(viewsets.ModelViewSet):
    permission_classes = [
        IsAuthenticated & (ParticipantReadOnly | MeetingOwnerReadWrite | (Create & RelatedMeetingOwned))
    ]

    serializer_class = AgendaItemSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = AgendaItemFilterSet

    def get_queryset(self):
        user = MinutesUser.from_user(self.request.user)
        return AgendaMeetingItem.objects.filter(
            meeting__in=user.my_meetings()
        )


class AgendaSubItemViewSet(viewsets.ModelViewSet):
    permission_classes = [
        IsAuthenticated & (ParticipantReadOnly | MeetingOwnerReadWrite | (Create & RelatedAgendaItemOwned))
    ]
    serializer_class = SubItemSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = AgendaSubItemFilterSet

    def get_queryset(self):
        user = MinutesUser.from_user(self.request.user)
        return AgendaSubItem.objects.filter(
            agenda_item__meeting__in=user.my_meetings()
        )


class VoteChoiceViewSet(viewsets.ModelViewSet):
    permission_classes = [
        (IsAuthenticated & Read) | IsAdminUser
    ]
    serializer_class = VoteChoiceSerializer

    def get_queryset(self):
        return VoteChoice.objects.all()


class RollCallVoteViewSet(viewsets.ModelViewSet):
    permission_classes = [
        IsAuthenticated & (ParticipantReadOnly | MeetingOwnerReadWrite)
    ]
    serializer_class = RollCallVoteSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = RollCallVoteFilterSet

    def get_queryset(self):
        user = MinutesUser.from_user(self.request.user)
        return RollCallVote.objects.filter(
            decision__agenda_item__meeting__in=user.my_meetings()
        )


class AnonymousVoteViewSet(viewsets.ModelViewSet):
    permission_classes = [
        IsAuthenticated & (ParticipantReadOnly | MeetingOwnerReadWrite)
    ]
    serializer_class = AnonymousVoteSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = AnonymousVoteFilterSet

    def get_queryset(self):
        user = MinutesUser.from_user(self.request.user)
        return AnonymousVote.objects.filter(
            decision__agenda_item__meeting__in=user.my_meetings()
        )


class InvitationViewSet(GenericViewSet):
    permission_classes = [
        IsAuthenticated
    ]
    serializer_class = InvitationRequestSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = AnonymousVoteFilterSet

    def create(self, request):
        invitation_request = InvitationRequestSerializer(data=request.data)
        invitation_request.is_valid(raise_exception=True)
        if User.objects.filter(email=invitation_request.data['email']).exists():
            raise ValidationError('A user with this email address already exists')
        new_user = User.objects.create(
            username=invitation_request.data['username'],
            email=invitation_request.data['email']
        )
        Invitation.objects.create(
            invited_user=new_user,
            inviting_user=request.user,
        )
        user_serializer = UserSerializer(instance=new_user)
        return Response(user_serializer.data, status=HTTP_201_CREATED)