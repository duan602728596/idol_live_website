import process from 'node:process';
import { spawn } from 'node:child_process';
import { vercelBuildOutput } from './utils.mjs';

const isWindows = process.platform === 'win32';

function command(cmd, args, cwdPath) {
  return new Promise((resolve, reject) => {
    const spawnOptions = {
      stdio: 'inherit',
      cwd: cwdPath
    };

    if (isWindows) spawnOptions.shell = true;

    const child = spawn(cmd, args, spawnOptions);

    child.on('close', function(code) {
      resolve();
    });

    child.on('error', function(error) {
      reject(error);
    });
  });
}

/* 编译后推送到vercel */
await command('vercel', ['--prod'], vercelBuildOutput);