# Generated by Django 3.0.5 on 2020-04-24 09:42

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import minutes.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='AgendaMeetingItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField()),
            ],
            bases=(models.Model, minutes.models.MeetingItemMixin),
        ),
        migrations.CreateModel(
            name='Decision',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField()),
                ('agenda_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='minutes.AgendaMeetingItem')),
            ],
            bases=(models.Model, minutes.models.AgendaSubItemMixin),
        ),
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('date', models.DateTimeField()),
                ('moderators', models.ManyToManyField(blank=True, related_name='meetings_moderated', to=settings.AUTH_USER_MODEL)),
                ('owners', models.ManyToManyField(blank=True, related_name='meetings_owned', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='VoteChoice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('color_code', models.IntegerField(default=16711680)),
            ],
        ),
        migrations.CreateModel(
            name='MinutesUser',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('auth.user',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='RollCallVote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('decision', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='minutes.Decision')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='rollcall_votes', to=settings.AUTH_USER_MODEL)),
                ('vote_class', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='minutes.VoteChoice')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('attended', models.BooleanField(default=False)),
                ('meeting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='participants', to='minutes.Meeting')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='meeting_participations', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='MeetingSeries',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField(default='')),
                ('moderators', models.ManyToManyField(related_name='meetingseries_moderated', to=settings.AUTH_USER_MODEL)),
                ('owners', models.ManyToManyField(related_name='meetingseries_owned', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='meeting',
            name='series',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='minutes.MeetingSeries'),
        ),
        migrations.CreateModel(
            name='AnonymousVote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField()),
                ('decision', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='minutes.Decision')),
                ('vote_class', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='minutes.VoteChoice')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='AgendaSubItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField()),
                ('agenda_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='minutes.AgendaMeetingItem')),
            ],
            bases=(models.Model, minutes.models.AgendaSubItemMixin),
        ),
        migrations.AddField(
            model_name='agendameetingitem',
            name='meeting',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='minutes.Meeting'),
        ),
    ]
