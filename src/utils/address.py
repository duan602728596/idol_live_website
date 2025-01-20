""" 地名中英文映射 """

from typing import TypedDict


class Address(TypedDict):
    """ 地址对应的英文和中文 """
    id: str
    name: str


address_maps: dict[str, str] = {
    'beijing': '北京',
    'shanghai': '上海',
    'guangzhou': '广州',
    'chengdu': '成都',
    'chongqing': '重庆',
    'hangzhou': '杭州',
    'fuzhou': '福州',
    'shenyang': '沈阳',
    'changsha': '长沙',
    'hefei': '合肥',
    'jiangxi': '江西',
    'shenzhen': '深圳',
    'nanning': '南宁',
}

address_list: list[Address] = []

for k in address_maps:
    address_list.append({
        'id': k,
        'name': address_maps[k],
    })
