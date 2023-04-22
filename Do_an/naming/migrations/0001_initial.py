# Generated by Django 4.1.4 on 2022-12-21 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='firstname',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(help_text='tên', max_length=20)),
                ('theme', models.CharField(choices=[('Cu', 'Cute'), ('Ro', 'Royal'), ('Na', 'Nature'), ('My', 'Mythology'), ('Fl', 'Flowers'), ('Un', 'Unique')], default='Cu', max_length=2)),
                ('gender', models.CharField(choices=[('B', 'Boy'), ('G', 'Girl'), ('U', 'Unisex')], default='U', max_length=1)),
                ('origin', models.CharField(choices=[('Vie', 'Vietnamese'), ('Dut', 'Dutch'), ('Eng', 'English'), ('Ger', 'German'), ('Ita', 'Italian'), ('Spa', 'Spanish')], default='Vie', max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='lastname',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_name', models.CharField(help_text='Họ', max_length=20)),
            ],
        ),
    ]
