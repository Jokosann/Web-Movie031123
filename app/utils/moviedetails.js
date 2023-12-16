// function details HTML ==> menampilkan detail movie yang diclick user
export function getMovieDetail(m) {
	return /*html*/ `<div class="details-container-child-card">
				<div class="details-container-card">
					<div class="up-details">
						<p class="up-details-title">Details</p>
						<i class="ri-close-fill close"></i>
					</div>
					<div class="main-details">
						<div class="img-details">
							<img src="${m.Poster}" alt="" />
						</div>
						<div class="information-details">
							<div class="information-title">
								<h4>${m.Title} ${m.Year}</h4>
							</div>
							<div class="director">
								<p><strong>Director : </strong> ${m.Director}</p>
							</div>
							<div class="actors">
								<p><strong>Actors : </strong> ${m.Actors}</p>
							</div>
							<div class="writers">
								<p><strong>Writers : </strong> ${m.Writer}</p>
							</div>
							<div class="plot">
								<p><strong>Plot : </strong> <br />${m.Plot}</p>
							</div>
						</div>
					</div>
				</div>
			</div>`;
}
