"""
WSGI config for boot project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/dev/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from django.core.handlers.wsgi import WSGIHandler
from utils.env import in_vercel_env

if in_vercel_env:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'api.boot.settings')
else:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'boot.settings')

application: WSGIHandler = get_wsgi_application()
app: WSGIHandler = application
