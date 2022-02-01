import { useState} from "react";

function useResults  () {

const baseURL = `
        https://api.themoviedb.org/3/discover/movie?
        api_key=${process.env.REACT_APP_API_KEY}
        `

const [movies, setMovies] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isError, setError] = useState(false)

    function loadMovies(startYear, endYear, genreList_URL, provider_URL, region) {
        
        const url = `https://api.themoviedb.org/3/discover/movie?
		api_key=${process.env.REACT_APP_API_KEY}
		&language=en-US
		&sort_by=popularity.desc
		&include_adult=true
		&include_video=false
		&page=1
        &primary_release_date.gte=${startYear}
		&primary_release_date.lte=${endYear}
		&with_genres=${genreList_URL}
		&with_watch_providers=${provider_URL}
		&watch_region=${region}
		&with_watch_monetization_types=flatrate`;
        
        setError(false)
        setIsLoading(true)
    
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setMovies(data.results);
            })
            .catch(() => {
                setError(true)
                setIsLoading(false)
            })
            }

        return {loadMovies, isError, isLoading, movies} 
}

export default useResults;
