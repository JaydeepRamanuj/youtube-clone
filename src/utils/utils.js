export const formatViews = (num) => {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(num);
};

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatYouTubeDuration(duration) {
  const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);

  if (match) {
    const minutes = parseInt(match[1] || "0", 10);
    const seconds = parseInt(match[2] || "0", 10);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  } else {
    return "0:00";
  }
}
