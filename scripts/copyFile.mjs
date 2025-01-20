import path from 'node:path';
import { copy } from 'fs-extra/esm';
import { metaHelper } from '@sweet-milktea/utils';

const { __dirname } = metaHelper(import.meta.url);

/* 拷贝python代码和前端资源文件 */
const vercelBuildOutput = path.join(__dirname, '../dist2');

await Promise.all([
  copy(path.join(__dirname, '../src'), path.join(vercelBuildOutput, 'api')),
  copy(path.join(__dirname, '../dist'), path.join(vercelBuildOutput, 'dist')),
  copy(path.join(__dirname, '../vercel.json'), path.join(vercelBuildOutput, 'dist/vercel.json'))
]);