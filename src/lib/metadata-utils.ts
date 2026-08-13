export function formatReadingTime(minutes: number | undefined): string {
  minutes = minutes ? Math.max(1, Math.floor(minutes)) : 0;
  return `${minutes} minute${minutes != 1 ? "s" : ""}`;
}
