""" live路由配置 """

from django.urls import path, URLResolver, URLPattern
from .views import LiveView

urlpatterns: list[URLResolver | URLPattern] = [
    path('<str:address>', LiveView.as_view(), name='live'),
]
