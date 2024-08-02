import axios from 'axios';

async function getCharactersByPage(page) {
	const url = `https://rickandmortyapi.com/api/character?page=${page}`;

	try {
		const { data } = await axios.get(url);

		return data;
	} catch (e) {
		throw new Error(e);
	}
}

async function getCharactersById(id) {
	const url = `https://rickandmortyapi.com/api/character/${id}`;

	try {
		const { data } = await axios.get(url);

		return data;
	} catch (e) {
		throw new Error(e);
	}
}

export { getCharactersByPage, getCharactersById };
