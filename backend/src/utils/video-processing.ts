export function trimVideo(filePath: string, start: number, end: number): string {
  // placeholder: integrate with ffmpeg
  console.log(`Trimming video ${filePath} from ${start}s to ${end}s`);
  return filePath;
}

export function addFilter(filePath: string, filter: string): string {
  console.log(`Applying filter ${filter} to ${filePath}`);
  return filePath;
}
