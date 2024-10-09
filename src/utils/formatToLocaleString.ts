export function formatToLocaleString(value: number) {
  return value.toLocaleString("pt-br", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
}
