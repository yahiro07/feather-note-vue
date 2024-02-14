export function itemBy<T extends Record<string, unknown>>(cond: Partial<T>): (item: T) => boolean {
  return (item: T) => Object.keys(cond).every((key) => cond[key] === item[key])
}

export function removeArrayItemsMatched<T>(arr: T[], matcher: (value: T) => boolean) {
  let i = 0
  while (i < arr.length) {
    if (matcher(arr[i])) {
      arr.splice(i, 1)
    } else {
      i++
    }
  }
}
