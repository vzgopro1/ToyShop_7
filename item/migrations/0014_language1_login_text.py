# Generated by Django 3.1.4 on 2021-01-10 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0013_remove_language1_buy_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='language1',
            name='login_text',
            field=models.CharField(default=11, max_length=35),
            preserve_default=False,
        ),
    ]
