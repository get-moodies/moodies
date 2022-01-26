import { useState, useEffect } from "react";

import face from "./face.png";
import "./index.css";

import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Bubbles from "./Bubbles";

const genera = [{name:"sci-fi",id:878,image:""},
				{name:"comedy",id:35,image:""},
				{name:"adventure",id:12,image:""},
				{name:"thriller",id:53,image:""}
				]

function App() {
	const [movies, setMovies] = useState([]);
	const [genre, setGenre] = useState("18");
	const [startYear, setStartYear] = useState(1960);
	const [endYear, setEndYear] = useState(1969);
	const [watchProvider, setWatchProvider] = useState("8");
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	
	const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&primary_release_date.gte=${startYear}&primary_release_date.lte=${parseInt(startYear)+9}&with_genres=${genre}&with_watch_providers=${watchProvider}&watch_region=DE&with_watch_monetization_types=flatrate`;
	
	const loadMovies = () => {
		setIsError(false);
		setIsLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setIsLoading(false);
				setMovies(json.results);
			})
			.catch((err) => setIsError(true));
	};

	useEffect(loadMovies, [genre, watchProvider, startYear]);

	// useEffect(() => {
	// 	setEndYear(parseInt(startYear)+9);
	// }, [startYear]);

	// console.log(movies);
	// console.log(`genre id is ${genre}`);
	// console.log(`watch provider id is ${watchProvider}`);
	// console.log(`start year is ${startYear}`);
	// console.log(`end year is ${endYear}`);
	// console.log(`url is ${url}`);

	const getContent = () => {
		if (isError) {
			return <div>the api fell asleep, try a refresh</div>;
		}
		if (isLoading) {
			return (
				<div>
					<img src={face} className="Load-spinner " alt="cage face" />
					<p>loading...</p>
				</div>
			);
		}
		if (!movies.length) {
			return <div>no results, try something else</div>;
		}
		return <MovieList movies={movies} />;
	};

	return (
		<div className="App-main lg:w-[1024px] mx-auto p-5 ">
			<div className="w-full">
				<Header />
				<div className="justify-center  mx-auto text-center">
					<p>choose a genre</p>
					<select
						name="genreSelect"
						onChange={(e) => setGenre(e.currentTarget.value)}
					>
						<option value="18">drama</option>
						<option value="35">comedy</option>
						<option value="53">thriller</option>
						<option value="12">adventure</option>
						<option value="878">sci-fi</option>
						<option value="14">fantasy</option>
						<option value="27">horror</option>
						<option value="28">action</option>
					</select>
					<p>choose a decade</p>
					<select
						name="yearSelect"
						onChange={(e) => setStartYear(e.currentTarget.value)}
					>
						<option value="1960">1960's</option>
						<option value="1970">1970's</option>
						<option value="1980">1980's</option>
						<option value="1990">1990's</option>
						<option value="2000">2000's</option>
						<option value="2010">2010's</option>
					</select>
					<p>choose a streaming service</p>
					<select
						name="serviceSelect"
						onChange={(e) => setWatchProvider(e.currentTarget.value)}
					>
						<option value="8">netflix</option>
						<option value="337">disney+</option>
						<option value="9">amazon prime</option>
					</select>
					<br />
					<p>choose a genre</p>
					<Bubbles category={genera}/>
					<p>choose a decade</p>
					<Bubbles category={genera}/>
					<br />
					{getContent()}
				</div>
			</div>
			<div className="backGround"></div>
		</div>
	);
}

export default App;
