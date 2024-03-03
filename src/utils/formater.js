export const formatTime = (time) => {
  const passDay = Math.round(
    (new Date() - new Date(time)) / (24 * 60 * 60 * 1000)
  );
  if (passDay < 0) return;
  if (passDay === 0)
    return new Intl.DateTimeFormat("vi-VN", {
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(time));
  if (passDay === 1) return "Yesterday";
  if (passDay < 30) return `${passDay} days`;
  if (passDay < 365)
    return new Intl.DateTimeFormat("vi-VN", {
      month: "numeric",
      day: "numeric",
    }).format(new Date(time));
  return new Intl.DateTimeFormat("vi-VN", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  }).format(new Date(time));
};
