export function formatReadingTime(minutes: number) {
  minutes = Math.max(1, Math.floor(minutes));
  return `${minutes} minute${minutes != 1 ? "s" : ""}`;
}
