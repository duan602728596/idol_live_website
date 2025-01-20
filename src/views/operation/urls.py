""" 运行情况路由配置 """

from django.urls import path, URLResolver, URLPattern
from .views import OperationView

urlpatterns: list[URLResolver | URLPattern] = [
    path('', OperationView.as_view(), name='operation'),
]
