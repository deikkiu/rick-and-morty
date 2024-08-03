export const getIdFromUrl = (urls) => {
	const ids = [];

	if (typeof urls === 'string') {
		ids.push(urls.slice(urls.lastIndexOf('/')));

		return ids;
	}

	if (typeof urls === 'object' && Array.isArray(urls)) {
		for (const url of urls) {
			ids.push(url.slice(url.lastIndexOf('/') + 1));
		}
	}

	return ids;
};
