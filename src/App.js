import logo from "./logo.svg";
import face from "./face.png";
import "./App.css";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

function App() {
	const [movies, setMovies] = useState([]);
	const [genre, setGenre] = useState("27");
	const [year, setYear] = useState(1980);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const loadMovies = () => {
		setIsError(false);
		setIsLoading(true);
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=d9744b937e412f755a8bf029eadabb81&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&year=${year}&with_genres=${genre}&with_watch_monetization_types=flatrate`
		)
			.then((response) => response.json())
			.then((json) => {
				setIsLoading(false);
				setMovies(json.results);
			})
			.catch((err) => setIsError(true));
	};

	useEffect(loadMovies, [genre, year]);

	console.log(movies);
	console.log(genre);
	console.log(year);

	const getContent = () => {
		if (isError) {
			return <div>the api fell asleep, try a refresh</div>;
		}
		if (isLoading) {
			return (
				<div>
					<p>loading</p>
				</div>
			);
		}
		if (!movies.length) {
			return <div>no results, try something else</div>;
		}
		return <MovieList movies={movies} />;
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={face} className="App-logo" alt="logo" />
				<p>choose a genre</p>
				<select
					name="genreDrop"
					onChange={(e) => setGenre(e.currentTarget.value)}
				>
					<option value="27">horror</option>
					<option value="28">action</option>
					<option value="35">comedy</option>
					<option value="53">thriller</option>
				</select>
				<p>choose a decade</p>
				<select
					name="yearDrop"
					onChange={(e) => setYear(e.currentTarget.value)}
				>
					<option value="1980">1980</option>
					<option value="1990">1990</option>
					<option value="2000">2000</option>
					<option value="2010">2010</option>
				</select>
				{/* <br />
				<button>submit</button> */}
				<br />
				{getContent()}
			</header>
		</div>
	);
}

export default App;
