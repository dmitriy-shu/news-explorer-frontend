export default function cutString(scroll, height, string) {
  const num = 25 + Math.floor(string.length * height / scroll);
  return string.slice(0, num);
}