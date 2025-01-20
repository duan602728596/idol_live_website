""" 获取当前环境变量 """

from os import getenv
from pathlib import Path
from urllib.parse import urlparse, ParseResult
from dotenv import load_dotenv

ROOT_DIR: Path = Path(__file__).resolve().parent.parent.parent
# 加载环境变量
load_dotenv(Path.joinpath(ROOT_DIR, '.env'))
# 数据库配置
postgres_url: str = getenv('DATABASE_URL')
postgres_parse_result: ParseResult = urlparse(postgres_url)

# 是否是测试环境
in_test_env: bool = getenv('TEST') is not None
