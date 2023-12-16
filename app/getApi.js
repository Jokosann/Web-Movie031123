import { fetchMovie } from "./fetchMovie.js";
import { loopingCard } from "./loopingCard.js";
import { getEror } from "./utils/eror.js";
const movieContainer = document.querySelector(".movie-container");
const input = document.querySelector("#input-search");

// API conect
export const getApi = async function () {
	try {
		const result = await fetchMovie(input.value);
		loopingCard(result);
	} catch (eror) {
		movieContainer.innerHTML = getEror();
	}
};
