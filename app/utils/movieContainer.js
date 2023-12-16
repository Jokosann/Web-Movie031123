// function card HTML ==> menampilkan movie hasil inputan user
export function getMovieContainer(m) {
	return /*html*/ `<div class="cards">
				<div class="img-cards">
					<img src="${m.Poster}" alt="" />
				</div>
				<div class="detail-cards">
					<p class="name-movie">${m.Title}</p>
					<p class="year">${m.Year}</p>
					<button class="btn-details" data-bs-target="#details-container" data-imdbid="${m.imdbID}">Show Details</button>
				</div>
			</div>`;
}
