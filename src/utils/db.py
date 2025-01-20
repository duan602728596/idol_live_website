""" 定义数据库的一些方法 """

from utils.env import in_test_env, postgres_url


def format_name(n: str) -> str:
    """
    格式化名字
    用于数据库表或者索引表
    """
    return (n + '_test') if in_test_env else n
