""" index view """

from json import dumps as json_dumps
from django.http import HttpRequest, HttpResponse
from django.views import View
from django.shortcuts import render
from utils.address import address_list


class IndexView(View):
    """ index view """
    def get(self, request: HttpRequest) -> HttpResponse:
        """ index路由 """
        return render(request, 'index.html', {
            'initial_state': json_dumps({
                'address_list': address_list,
            }, separators=(',', ':')),
        })
