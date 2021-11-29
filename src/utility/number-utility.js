export function generateRandomNumber(min = 0, max = 1000) {
  return Math.random() * (max - min) + min;
}
