import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import useResults from '../components/useResults';

import MovieList from '../components/MovieList';

import face from '../images/face.png'

export default function Suggestions() {
    const {genreList,startYear,endYear,region,providerList} = useParams();
    const {loadMovies, isLoading, isError, movies} = useResults()
	
    useEffect(() => {
        loadMovies(
            startYear, 
            endYear, 
            genreList, 
            providerList, 
            region	
            )
    },[])

    return ( 
        <>
            {movies && <MovieList movies={movies} />}
            <img src={face} className="absolute bottom-3/4 left-[65%] my-auto h-40" alt="cage face" /> 
        </>
        );
}
