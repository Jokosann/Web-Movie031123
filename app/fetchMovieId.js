// function fetchMovieId ==> object lengkap tentang movie yang diclick
export async function fetchMovieId(imdbid) {
	return await fetch("http://www.omdbapi.com/?apikey=c7a6010f&i=" + imdbid).then((response) =>
		response.json()
	);
}
