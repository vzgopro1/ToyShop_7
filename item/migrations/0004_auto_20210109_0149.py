# Generated by Django 3.1.4 on 2021-01-09 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0003_auto_20210108_2055'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='fromAge',
            field=models.SmallIntegerField(),
        ),
    ]
