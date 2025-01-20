""" 图片代理路由配置 """

from django.urls import path, URLResolver, URLPattern
from .views import ProxyImageView

urlpatterns: list[URLResolver | URLPattern] = [
    path('', ProxyImageView.as_view(), name='proxy_image'),
]
