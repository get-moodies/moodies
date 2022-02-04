import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useResults from "../components/useResults";

import MovieList from "../components/MovieList";


///borrar esto cuando acabe componentes
import Register from "../components/Register"
import Login from "../components/Login";

import face from "../images/face.png";

export default function Suggestions() {
	const {
		sortQuery,
		adult_URL,
		genreList,
		startYear,
		endYear,
		region,
		providerList,
		movieLength,
	} = useParams();
	const { loadMovies, isLoading, isError, movies } = useResults();

	useEffect(() => {
		loadMovies(
			sortQuery,
			adult_URL,
			movieLength,
			startYear,
			endYear,
			genreList,
			providerList,
			region
		);
	}, []);
	return (
		<>
			<Register/>
			<Login/>
			

			{
				<MovieList
					movies={movies}
					watchProvider={providerList}
					isLoading={isLoading}
					isError={isError}
				/>
			}
			{/* <img
				src={face}
				className="absolute bottom-3/4 left-[65%] my-auto h-40"
				alt="cage face"
			/> */}
		</>
	);
}
