import { useState, useEffect } from "react";

import "./index.css";

import MovieList from "./components/MovieList";
import Header from "./components/Header";
import Button from "./components/Button";
import ServiceSelector from "./components/ServiceSelector";
import Bubbles from "./components/Bubbles";
import Icons from "./components/Icons";
import Options from "./components/Options";
import TimeSlider from "./components/TimeSlider";
import SelectionBox from "./components/SelectionBox";

import { generes, genera, age} from "./data";
import face from "./face.png";


function App() {
	const [movies, setMovies] = useState([]);
	const [genre, setGenre] = useState(new Array(generes.length).fill(false));
	const [startYear, setStartYear] = useState(1950);
	const [endYear, setEndYear] = useState(2022);
	const [watchProvider, setWatchProvider] = useState("8");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isOptionsOn, setIsOptionsOn] = useState(false);
	const [region, setRegion] = useState("DE");
	const [userRegion, setUserRegion] = useState('');

	const genreList_URL = [...genre]
		.map((genre, index) => [genre, index])
		.filter((genre) => genre[0])
		.map((genre) => generes[genre[1]].id)
		.join("%2C");

	const url = `https://api.themoviedb.org/3/discover/movie?
		api_key=${process.env.REACT_APP_API_KEY}
		&language=en-US
		&sort_by=popularity.desc
		&include_adult=true
		&include_video=false
		&page=1&primary_release_date.gte=${startYear}
		&primary_release_date.lte=${endYear}
		&with_genres=${genreList_URL}
		&with_watch_providers=${watchProvider}
		&watch_region=${region}
		&with_watch_monetization_types=flatrate`;

	const loadMovies = () => {
		setIsError(false);
		setIsLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setMovies(json.results);
				setIsLoading(false);
			})
			.catch((err) => setIsError(true));
	};

	const getUserRegion = () =>
	fetch('https://geolocation-db.com/json/')
	.then((response) => response.json())
	.then((json) => {setUserRegion(json.country_code)})	

	useEffect( () => {getUserRegion()}, [])	
	useEffect(loadMovies, [genre, watchProvider, startYear, endYear,userRegion]);
	useEffect(()=>setRegion(userRegion),[userRegion])

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
			return <div>Nick found no recomendations for you! Try less picky?</div>;
		}
		return <MovieList movies={movies} />;
	};

	const selectionHandler = [
		(index) => {
			const newGenre = [...genre];
			newGenre[index] = !newGenre[index];
			setGenre(newGenre);
		},
		(index, year) => {
			if (index < 5) {
				console.log(index, year, age[index].id);
				setStartYear(age[index].id);
				setEndYear(parseInt(age[index].id) + 9);
			} else if (year === "start") setStartYear(index);
			else setEndYear(index);
		},
	];
	
	const regionHandler = (region) => setRegion(region)

//console.log(movies);
	// console.log(`genre id is ${genre}`);
	// console.log(`watch provider id is ${watchProvider}`);
	// console.log(`start year is ${startYear}`);
	// console.log(`end year is ${endYear}`);
	// console.log(`url is ${url}`);

	return (
		<div className="App-main lg:w-[1024px] mx-auto p-5 ">
			<div className="w-full">
				
				<Header region={region} handler={regionHandler}/>

				<div className="justify-center  mx-auto text-center w-full">
					<h3 className="text-xl text-white font-medium first-letter:text-3xl">
						Which mood are you in?
					</h3>
					<Icons category={genera} handler={selectionHandler[0]} />

					<h3 className="text-xl text-white font-medium first-letter:text-3xl">
						What era do you feel like to watch?
					</h3>
					<Bubbles category={age} handler={selectionHandler[1]} />

					<SelectionBox
						genre={genre}
						generes={generes}
						startYear={startYear}
						endYear={endYear}
					/>

					<button
						onClick={() => setIsSubmitted(!isSubmitted)}
						className="m-1 my-5 bg-opacity-20 bg-black hover:bg-black hover:bg-opacity-40 px-4 py-2 rounded-full font-medium outline outline-offset-0 outline-1 outline-white text-white"
					>
						Show me movies!
					</button>
					<button
						onClick={() => setIsOptionsOn(!isOptionsOn)}
						className="m-1 my-5 bg-opacity-20 bg-black hover:bg-black hover:bg-opacity-40 px-4 py-2 rounded-full font-medium outline outline-offset-0 outline-1 outline-white text-white"
					>
						Particular Taste?
					</button>

					{isOptionsOn && (
						<div>
							<Options handler={selectionHandler[0]} />
							<TimeSlider
								handler={selectionHandler[1]}
								startYear={startYear}
								endYear={endYear}
							/>
						</div>
					)}

					{isSubmitted && <div>{getContent()}</div>}
				</div>
			</div>
			<div className="backGround"></div>
		</div>
	);
}

export default App;

