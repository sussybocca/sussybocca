import * as fs from 'fs';
import * as path from 'path';

export function saveFile(folder: string, fileName: string, buffer: Buffer) {
  const dir = path.join(__dirname, '..', '..', 'uploads', folder);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, fileName);
  fs.writeFileSync(filePath, buffer);
  return filePath;
}
