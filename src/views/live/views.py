""" live view """

from urllib.parse import quote_plus
from json import dumps as json_dumps
from django.http import HttpRequest, HttpResponse, HttpResponseNotFound
from django.views import View
from django.shortcuts import render
from django.db.models import QuerySet
from models.weibo_spider_model import WeiboSpiderModel, WeiboSpiderType
from utils.address import address_maps


class LiveView(View):
    """ live view """
    def get(self, request: HttpRequest, address: str) -> HttpResponse | HttpResponseNotFound:
        """ live路由 """
        if address not in address_maps:
            return HttpResponseNotFound('Address not found.')
        address_val: str = address_maps.get(address)
        weibo_spider_model: QuerySet[WeiboSpiderModel] = WeiboSpiderModel.objects.filter(area__icontains=address_val)
        return render(request, 'live.html', {
            'address_val': address_val,
            'initial_state': json_dumps({
                'weibo_list': self.format_weibo_spider(weibo_spider_model),
                'address_val': address_val,
            }, separators=(',', ':')),
        })

    def format_weibo_spider(self, weibo_spider_model: QuerySet[WeiboSpiderModel]) -> list:
        """ 格式化数据 """
        result: list = []
        for x in weibo_spider_model:
            result.append({
                'bid': x.bid,
                'uid': x.uid,
                'screen_name': x.screen_name,
                'avatar_hd': quote_plus(x.avatar_hd),
                'raw_text': x.raw_text,
                'created_at': x.created_at,
                'edit_at': x.edit_at,
                'pics': self.quote_plus_pics(x.pics),
            })
        result: list = sorted(result, key=self.weibo_spider_fields_sort_callback, reverse=True)
        return result

    @staticmethod
    def weibo_spider_fields_sort_callback(x: WeiboSpiderType) -> int:
        """ 根据日期排序 """
        edit_at: int | None = x.get('edit_at')
        if edit_at is None:
            return x['created_at']
        return edit_at

    @staticmethod
    def quote_plus_pics(pics: list[str] | None) -> list[str] | None:
        """ 图片处理 """
        if pics is None:
            return None
        new_pics: list[str] = []
        for pic in pics:
            new_pics.append(quote_plus(pic))
        return new_pics
