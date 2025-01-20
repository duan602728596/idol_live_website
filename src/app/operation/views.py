""" operation view """

from json import dumps as json_dumps
from django.http import HttpRequest, HttpResponse
from django.views import View
from django.shortcuts import render
from django.db.models import QuerySet
from models.log_model import LogModel


class OperationView(View):
    """ operation view """
    def get(self, request: HttpRequest) -> HttpResponse:
        """ operation路由 """
        log_model: QuerySet[LogModel] = LogModel.objects.all().order_by('-run_time')
        return render(request, 'operation.html', {
            'initial_state': json_dumps({
                'log': self.format_log(log_model),
            }, separators=(',', ':')),
        })

    @staticmethod
    def format_log(log_model: QuerySet[LogModel]) -> list:
        """ 格式化数据 """
        result: list = []
        for x in log_model:
            result.append({
                'run_time': x.run_time,
                'message': x.message,
            })
        return result
