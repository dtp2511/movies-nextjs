export const shorten = (str, n = 50) => {
  if (str) {
    if (str < n) return str;
    return str.substr(0, n) + '...';
  }
  return '';
};
