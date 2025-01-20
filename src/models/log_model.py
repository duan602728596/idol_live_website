""" log数据库表模型 """

from typing import TypedDict
from django.db.models import Model, CharField, IntegerField, UUIDField
from utils.db import format_name


class LogType(TypedDict):
    """ 数据库查到的值 """
    id: str
    run_time: int
    message: str


class LogModel(Model):
    """ log数据库表模型 """
    id: UUIDField = UUIDField(primary_key=True, null=False)
    run_time: IntegerField = IntegerField()
    message: CharField = CharField(max_length=255, null=False)

    class Meta:
        db_table: str = format_name('log')
