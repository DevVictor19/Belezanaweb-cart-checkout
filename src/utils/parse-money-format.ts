export function ParseMoneyFormat(value: number): string {
  return value.toFixed(2).replace(".", ",");
}
