import { getMovieDetail } from "./utils/moviedetails.js";
const detailsContainer = document.querySelector(".details-container");

// function showDetail ==> menampilkan card detail movie
export function showDetails(m) {
	const movieDetails = getMovieDetail(m);
	detailsContainer.style.display = "block";
	detailsContainer.innerHTML = movieDetails;
}
