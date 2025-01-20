""" index路由配置 """

from django.urls import path, URLResolver, URLPattern
from .views import IndexView

urlpatterns: list[URLResolver | URLPattern] = [
    path('', IndexView.as_view(), name='index'),
]
