from django.db import models


# Create your models here.
class BlogPost(models.Model):
    name = models.CharField(max_length=100, verbose_name='نام')

    def __str__(self):
        return self.name
