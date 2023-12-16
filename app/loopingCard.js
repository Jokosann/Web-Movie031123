import { getMovieContainer } from "./utils/movieContainer.js";
const movieContainer = document.querySelector(".movie-container");

// function loopingCards ==> menampilkan hasil dari looping arrayOfObject
export function loopingCard(movies) {
	let cards = "";
	movies.forEach((m) => {
		cards += getMovieContainer(m);
		movieContainer.innerHTML = cards;
	});
}
