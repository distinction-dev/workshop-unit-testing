// axiosCaller.js
const axios = require('axios');

async function fetchDataFromApi(apiUrl) {
	try {
		const response = await axios.get(apiUrl);
		return response.data;
	} catch (error) {
		throw error;
	}
}

module.exports = { fetchDataFromApi };
