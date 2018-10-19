export const checkValidity = (type, value) => {
  if (type === "title") {
    if (value.length >= 5 && value.length <= 15) return true;
  }

  if (type === "topic") {
    if (value.length >= 5 && value.length <= 15) return true;
  }

  if (type === "body") {
    if (value.length >= 10) return true;
  }
  return false;
};
