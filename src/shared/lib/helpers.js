export const getIdFromUrl = (urls) => {
  if (urls.includes('/')) {
    const id = urls.slice(urls.lastIndexOf('/') + 1);

    if (!isNaN(Number(id))) {
      return id;
    }

    return null;
  }

  return null;
};
