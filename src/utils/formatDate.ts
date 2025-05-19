export const formatDate = (date?: string): string => {
  if (!date) return "";
  return new Date(date).toLocaleString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    formatMatcher: "basic",
  });
};
