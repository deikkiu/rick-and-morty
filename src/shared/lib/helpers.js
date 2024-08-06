export const getIdFromUrl = (urls) => {
  const ids = [];

  if (typeof urls === 'string') {
    return urls.slice(urls.lastIndexOf('/') + 1);
  }

  if (typeof urls === 'object' && Array.isArray(urls)) {
    for (const url of urls) {
      ids.push(url.slice(url.lastIndexOf('/') + 1));
    }
  }

  return ids.join(',');
};
