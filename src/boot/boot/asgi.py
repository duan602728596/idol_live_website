"""
ASGI config for boot project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/dev/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application
from utils.env import in_vercel_env

if in_vercel_env:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'api.boot.settings')
else:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'boot.settings')

application = get_asgi_application()
