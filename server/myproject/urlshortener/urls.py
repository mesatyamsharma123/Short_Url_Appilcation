# urlshortener/urls.py
from django.urls import path
from .views import shorten_url

urlpatterns = [
    path('shorten/', shorten_url, name='shorten_url'),  # Matches /api/shorten/
]
