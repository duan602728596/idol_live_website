import * as process from 'node:process';
import * as path from 'node:path';
// @ts-ignore
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Options as HtmlMinifierOptions } from 'html-minifier-terser';

const isDev: boolean = process.env.NODE_ENV === 'development';

// html代码压缩配置
const htmlWebpackPluginMinify: boolean | HtmlMinifierOptions = isDev ? false : {
  collapseWhitespace: true,
  keepClosingSlash: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: {
    module: true,
    ecma: 2020,
    safari10: true
  }
};

/**
 * 创建路径
 * @param { string } p - 路径
 */
function srcPath(p: string): string {
  return path.join(__dirname, 'src-frontend', p);
}

export default function(info: Record<string, any>): Record<string, any> {
  const config: Record<string, any> = {
    frame: 'vue',
    dll: [
      '@ant-design/icons-vue',
      'ant-design-vue',
      'classnames',
      'dayjs',
      'dayjs/esm/locale/zh-cn.js',
      'vue'
    ],
    entry: {
      index: [srcPath('index.tsx')],
      live: [srcPath('live.tsx')],
      operation: [srcPath('operation.tsx')]
    },
    output: { publicPath: '/static/' },
    html: [
      { template: srcPath('index.pug'), minify: htmlWebpackPluginMinify },
      { template: srcPath('live.pug'), minify: htmlWebpackPluginMinify },
      { template: srcPath('operation.pug'), minify: htmlWebpackPluginMinify }
    ],
    javascript: {
      exclude: /node_modules/i
    },
    typescript: {
      exclude: /node_modules/i
    },
    sass: {
      include: /src-frontend/i
    },
    less: {
      include: /node_modules[\\/]_?ant-design-vue/,
      exclude: /tailwindcss/i
    },
    rules: [
      {
        test: /\.tailwindcss\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  };

  return config;
}