export const HOUR = 60 * 60;
export const DAY = 24 * HOUR;
export const MINUTE = 1000 * 60;
export const MINUTES_IN_DAY = 60 * 24;

export function now() {
  const nowDate = new Date();
  return Math.round(nowDate.getTime() / 1000);
}
