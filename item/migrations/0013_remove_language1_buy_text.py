# Generated by Django 3.1.4 on 2021-01-10 21:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0012_language1_buy_text'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='language1',
            name='buy_text',
        ),
    ]
