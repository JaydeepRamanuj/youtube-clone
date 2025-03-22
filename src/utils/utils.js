export const formatViews = (num) => {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(num);
};

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
