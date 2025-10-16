export function generateId(): string {
  return Date.now().toString() + Math.floor(Math.random() * 1000);
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
