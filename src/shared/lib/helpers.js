export const getIdFromUrl = (urls) => {
  return urls.slice(urls.lastIndexOf('/') + 1);
};
