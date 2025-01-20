""" 图片代理view """

from urllib.parse import unquote_plus
from django.views import View
from django.http import HttpRequest, HttpResponse, HttpResponseNotFound, HttpResponseServerError
import requests


class ProxyImageView(View):
    """ 图片代理 """
    cache_control: int = 3_600 * 24 * 365
    timeout: int = 60 * 4

    def get(self, request: HttpRequest) -> HttpResponse | HttpResponseNotFound | HttpResponseServerError:
        """ 图片代理 """
        image: str | None = request.GET.get('u')
        if image is None:
            return HttpResponseNotFound()
        image: str = unquote_plus(image)
        try:
            # 向目标 URL 发起请求
            response = requests.get(image, stream=True, headers={'Referer': 'https://weibo.com/'}, timeout=self.timeout)
            # 检查请求的状态码
            if response.status_code == 200:
                http_response: HttpResponse = HttpResponse(content=response.raw.read(),
                                                           content_type=response.headers.get('content-type'))
                http_response.status_code = 200
                http_response['Cache-Control'] = 'public, max-age={}'.format(self.cache_control)
                return http_response
            elif response.status_code == 404:
                return HttpResponseNotFound()
            else:
                return HttpResponseServerError()
        except requests.RequestException as e:
            return HttpResponseServerError(f'Error fetching image: {str(e)}')

