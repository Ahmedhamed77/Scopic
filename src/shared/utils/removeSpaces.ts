export const removeSpaces = (title?: string) => {
  return title?.trim().replace(/\s+/g, ' ');
};
