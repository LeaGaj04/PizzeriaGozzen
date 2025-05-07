from django.db import models

# Create your models here.
class Local(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=255)
    latitud = models.FloatField()
    longitud = models.FloatField()
