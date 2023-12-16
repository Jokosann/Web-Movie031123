//function FetchMovie ==> arrayOfObject
export async function fetchMovie(keyword) {
	return await fetch("http://www.omdbapi.com/?apikey=c7a6010f&s=" + keyword)
		.then((response) => response.json())
		.then((result) => result.Search);
}
