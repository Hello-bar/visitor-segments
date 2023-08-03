export default function paramsFromString(value: string) {
  return Object.fromEntries(new URLSearchParams(value));
}
