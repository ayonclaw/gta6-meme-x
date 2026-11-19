import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = join(dirname(fileURLToPath(import.meta.url)), 'POST.json');
const destinationDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(destinationDirectory, 'POST.json');

await mkdir(destinationDirectory, { recursive: true });
await copyFile(source, destination);
console.log(destination);
