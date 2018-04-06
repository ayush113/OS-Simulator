from django.db import models

# Create your models here.
class sendproc(models.Model):
    arrtime = models.CharField(max_length = 50)
    bursttime = models.CharField(max_length = 50)
