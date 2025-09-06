export function validateUrl(url) {
  return /^https?:\/\/.+\..+/.test(url);
}
export function validateValidity(minutes) {
  return /^\d+$/.test(minutes) && Number(minutes) > 0;
}