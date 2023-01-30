export function sum(a: number, b: number, format: "html" | "text" = "html") {
  const result = a + b;
  if (format === "html") {
    return `<span>${result}</span>`;
  } else {
    return result;
  }
}
