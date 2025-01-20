import path from 'node:path';
import { readFile, writeFile, rename } from 'node:fs/promises';
import { copy } from 'fs-extra/esm';
import { parse as tomlParse } from 'smol-toml';
import { metaHelper } from '@sweet-milktea/utils';

const { __dirname } = metaHelper(import.meta.url);
const vercelBuildOutput = path.join(__dirname, '../.vercel');

/* 拷贝python代码和前端资源文件 */
async function copyFile() {
  await Promise.all([
    copy(path.join(__dirname, '../src'), vercelBuildOutput),
    copy(path.join(__dirname, '../dist'), path.join(vercelBuildOutput, 'dist')),
    copy(path.join(__dirname, '../vercel.json'), path.join(vercelBuildOutput, 'vercel.json'))
  ]);
  await rename(path.join(vercelBuildOutput, 'boot'), path.join(vercelBuildOutput, 'api'));
}

/* 解析和创建requirements文件 */
async function createRequirementsTxt() {
  const tomlStr = await readFile(path.join(__dirname, '../pyproject.toml'), { encoding: 'utf8' });
  const pyproject = tomlParse(tomlStr);

  await writeFile(path.join(vercelBuildOutput, 'requirements.txt'), pyproject.project.dependencies.join('\n'));
}

await copyFile();
await createRequirementsTxt();