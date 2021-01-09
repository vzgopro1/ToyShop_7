# Generated by Django 3.1.4 on 2021-01-08 20:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0002_auto_20210107_2140'),
    ]

    operations = [
        migrations.AddField(
            model_name='trade',
            name='product',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='item.product'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='trade',
            name='status',
            field=models.CharField(choices=[('processing', 'Processing'), ('order', 'Order')], default=1, max_length=35),
            preserve_default=False,
        ),
    ]
