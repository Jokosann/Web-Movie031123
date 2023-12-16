import { getLoading } from "./app/utils/loading.js";
import { getApi } from "./app/getApi.js";
import { getLoad } from "./app/utils/load.js";
import { fetchMovieId } from "./app/fetchMovieId.js";
import { showDetails } from "./app/showDetails.js";

const movieContainer = document.querySelector(".movie-container");
const detailsContainer = document.querySelector(".details-container");
const input = document.querySelector("#input-search");

// event key ==> ketika di Enter
input.addEventListener("keypress", async function (event) {
	if (event.key === "Enter") {
		movieContainer.innerHTML = getLoading();
		await getApi();
	}
});

// event diclick ==> ketika tombol diclick
document.addEventListener("click", async function (e) {
	if (e.target.classList.contains("btn-search")) {
		movieContainer.innerHTML = getLoading();
		await getApi();
	}
	if (e.target.classList.contains("btn-details")) {
		detailsContainer.style.display = "block";
		detailsContainer.innerHTML = getLoad();
		const imdbid = e.target.dataset.imdbid;
		const movieId = await fetchMovieId(imdbid);
		showDetails(movieId);
	}
	if (e.target.classList.contains("close")) {
		detailsContainer.classList.toggle("out");
		setTimeout(() => {
			const detailChild = document.querySelector(".details-container-child-card");
			detailsContainer.removeChild(detailChild);
			detailsContainer.classList.toggle("out");
			detailsContainer.style.display = "none";
		}, 400);
	}
});
