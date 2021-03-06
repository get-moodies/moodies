import { useState } from "react";

function useResults() {
	const baseURL = `
        https://api.themoviedb.org/3/discover/movie?
        api_key=${process.env.REACT_APP_API_KEY}
        `;

	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setError] = useState(false);

	function loadMovies(
		sortQuery,
		adult_URL,
		movieLength,
		startYear,
		endYear,
		genreList_URL,
		provider_URL,
		region
	) {
		const url = `https://api.themoviedb.org/3/discover/movie?
		api_key=${process.env.REACT_APP_API_KEY}
		&sort_by=${sortQuery}
		&include_adult=${adult_URL}
		&with_runtime.gte=${movieLength}
		&page=1
        &vote_count.gte=100
        &primary_release_date.gte=${startYear}
		&primary_release_date.lte=${endYear}
		&with_genres=${genreList_URL}
		&with_watch_providers=${provider_URL}
		&watch_region=${region}
        `;

		// removed from url in case people want to search full database:
		// &with_watch_monetization_types=flatrate
		// removed to include non english movies
		// 	&language=en-US
		// removed because not sure needed
		// &include_video=false

		setError(false);
		setIsLoading(true);

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setIsLoading(false);
				setMovies(data.results);
			})
			.catch(() => {
				setError(true);
				setIsLoading(false);
			});
	}

	return { loadMovies, isError, isLoading, movies };
}

export default useResults;
