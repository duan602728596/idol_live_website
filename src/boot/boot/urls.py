"""
URL configuration for boot project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, URLResolver, URLPattern
from utils.env import in_test_env

urlpatterns: list[URLResolver | URLPattern] = [
    path('', include('views.index.urls')),
    path('index/', include('views.index.urls')),
    path('live/', include('views.live.urls')),
    path('operation/', include('views.operation.urls')),
    path('proxy_image/', include('views.proxy_image.urls')),
]

if in_test_env:
    urlpatterns.append(path('admin/', admin.site.urls))
