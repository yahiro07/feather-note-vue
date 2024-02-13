export function checkStringLength(text: string, min: number, max: number) {
  return min <= text.length && text.length <= max
}
