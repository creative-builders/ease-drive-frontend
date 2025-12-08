export function trimText(text = "", maxLength = 50) {
  if (typeof text !== "string") return "";
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength).trim() + "...";
}