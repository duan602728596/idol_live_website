import path from 'node:path';
import { metaHelper } from '@sweet-milktea/utils';

export const { __dirname } = metaHelper(import.meta.url);
export const vercelBuildOutput = path.join(__dirname, '../dist2');