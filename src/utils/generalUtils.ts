export function itemBy<T extends Record<string, unknown>>(cond: Partial<T>): (item: T) => boolean {
  return (item: T) => Object.keys(cond).every((key) => cond[key] === item[key])
}
