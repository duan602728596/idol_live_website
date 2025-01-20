""" weibo_spider数据库表模型 """

from typing import TypedDict
from django.db.models import Model, CharField, TextField, IntegerField, JSONField
from utils.db import format_name


class WeiboSpiderType(TypedDict):
    """ 数据库查到的值 """
    aid: str
    bid: str
    uid: str
    screen_name: str
    avatar_hd: str
    raw_text: str
    created_at: int
    edit_at: int | None
    area: str
    pics: list[str] | None


class WeiboSpiderModel(Model):
    """ weibo_spider数据库表模型 """
    aid: CharField = CharField(max_length=30, null=False)
    bid: CharField = CharField(max_length=30, primary_key=True, null=False)
    uid: CharField = CharField(max_length=30, null=False)
    screen_name: CharField = CharField(max_length=30, null=False)
    avatar_hd: CharField = CharField(max_length=255, null=False)
    raw_text: TextField = TextField(null=False)
    created_at: IntegerField = IntegerField()
    edit_at: IntegerField = IntegerField()
    area: CharField = CharField(max_length=255, null=False)
    pics: JSONField = JSONField()

    class Meta:
        db_table: str = format_name('weibo_spider')
