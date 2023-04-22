from django.db import models

# Create your models here.
class firstname(models.Model):
    first_name = models.CharField(max_length=20, help_text='tên')
    THEME_CHOICES = (
        ('Cu', 'Cute'),
        ('Ro', 'Royal'),
        ('Na', 'Nature'),
        ('My', 'Mythology'),
        ('Fl', 'Flowers'),
        ('Un', 'Unique')
    )
    theme = models.CharField(max_length=2, choices=THEME_CHOICES, default='Cu')
    GENDER_CHOICES = (
        ('B', 'Boy'),
        ('G', 'Girl'),
        ('U', 'Unisex')
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='U')
    ORIGIN_CHOICES = (
        ('Vie', 'Vietnamese'),
        ('Dut', 'Dutch'),
        ('Eng', 'English'),
        ('Ger', 'German'),
        ('Ita', 'Italian'),
        ('Spa', 'Spanish')
    )
    origin = models.CharField(max_length=3, choices=ORIGIN_CHOICES, default='Vie')
    def __str__(self):
        return self.first_name 


class lastname(models.Model):
    last_name = models.CharField(max_length=20, help_text='Họ')
    origin = firstname.origin
    def __str__(self): 
        return self.last_name 


class post(models.Model):
    topic = models.CharField(max_length=200)
    content = models.FileField(null=False)
    def __str__(self):
        return self.topic 