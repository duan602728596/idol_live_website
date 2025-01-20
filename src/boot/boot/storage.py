""" 忽略html静态资源文件 """

from django.contrib.staticfiles.storage import StaticFilesStorage

class IgnoreExtensionStaticFilesStorage(StaticFilesStorage):
    """ 忽略html静态资源文件 """
    def listdir(self, path: str) -> (str, list[str]):
        """ listdir """
        directories, files = super().listdir(path)
        ignored_extensions: list[str] = ['.html']
        filtered_files: list[str] = [f for f in files if not any(f.endswith(ext) for ext in ignored_extensions)]
        return directories, filtered_files
