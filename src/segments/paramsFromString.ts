export default function paramsFromString(string: string) {
  return Object.fromEntries(new URLSearchParams(string));
}
