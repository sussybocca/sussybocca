export function formatDuration(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function truncate(text: string, length = 100) {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

export function generateThumbnail(file: File) {
  // placeholder: actual thumbnail generation would need canvas or backend FFmpeg
  return URL.createObjectURL(file);
}

export function sortVideosByDate(videos: any[]) {
  return videos.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}
