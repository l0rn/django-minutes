from django.contrib.auth.models import User
from django.utils import timezone
from rest_framework.authtoken.models import Token

from minutes.models import Meeting, MeetingSeries


class MeetingScenario:
    def __init__(self):
        self.series_owner = User.objects.create(username="series_owner")
        self.owner = User.objects.create(username="owner")
        self.participant = User.objects.create(username="participant")
        self.nobody = User.objects.create(username="nobody")

        self.series_owner_token = Token.objects.create(user=self.series_owner)
        self.owner_token = Token.objects.create(user=self.owner)
        self.participant_token = Token.objects.create(user=self.participant)
        self.nobody_token = Token.objects.create(user=self.nobody)

        self.test_meeting_series = MeetingSeries.objects.create(name="Test Series")
        self.test_meeting_series.owners.add(self.series_owner)

        self.another_test_meeting_series = MeetingSeries.objects.create(name="Another Test Series")
        self.meeting = Meeting.objects.create(
            name="Test Meeting",
            date=timezone.now(),
            series=self.test_meeting_series
        )

        self.another_meeting = Meeting.objects.create(
            name="Another Meeting",
            date=timezone.now(),
            series=self.another_test_meeting_series
        )

        self.meeting.add_user_as_participant(self.participant)
        self.meeting.owners.add(self.owner)
