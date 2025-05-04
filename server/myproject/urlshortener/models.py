from django.db import models

class Link(models.Model):
    original_url = models.URLField(max_length=200)
    shortened_url = models.URLField(max_length=200)

    def __str__(self):
        return self.original_url
