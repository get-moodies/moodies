import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import useResults from "./components/useResults";

import "./index.css";

import Header from "./components/Header";
import Bubbles from "./components/Bubbles";
import Icons from "./components/Icons";
import Options from "./components/Options";
import TimeSlider from "./components/TimeSlider";
import SelectionBox from "./components/SelectionBox";
import Niche from "./components/Niche";
import ServiceSelector from "./components/ServiceSelector";

import { generes, genresIcons, age, providers } from "./data";

function App() {
	const [genre, setGenre] = useState(new Array(generes.length).fill(false));
	const [ageSelected, setAgeSelected] = useState(
		new Array(age.length).fill(false)
	);
	const [startYear, setStartYear] = useState(1950);
	const [endYear, setEndYear] = useState(2022);
	const [watchProvider, setWatchProvider] = useState(
		new Array(providers.length).fill(false)
	);
	const [nicheSelected, setNicheSelected] = useState(false);
	const [isOptionsOn, setIsOptionsOn] = useState(false);

	const [region, setRegion] = useState("DE");
	const [userRegion, setUserRegion] = useState("");
	const navigate = useNavigate();
	const { loadMovies, isLoading, isError, movies } = useResults();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const [isAdult, setIsAdult] = useState(false);
	const [movieLength, setMovieLength] = useState(0);
	const [sortQuery, setSortQuery] = useState("popularity.desc");

	const adult_URL = isAdult;

	// console.log(sortQuery);
	// console.log(movieLength);
	// console.log(isAdult);
	// console.log(userRegion);

	const genreList_URL = [...genre]
		.map((genre, index) => [genre, index])
		.filter((genre) => genre[0])
		.map((genre) => generes[genre[1]].id)
		.join("%2C");

	const provider_URL = [...watchProvider]
		.map((watchProvider, index) => [watchProvider, index])
		.filter((watchProvider) => watchProvider[0])
		.map((watchProvider) => providers[watchProvider[1]].provider_id)
		.join("|");

	const getUserRegion = () =>
		fetch("https://geolocation-db.com/json/")
			.then((response) => response.json())
			.then((json) => {
				setUserRegion(json.country_code);
			})
			.catch(() => {
				setUserRegion("DE");
			});

	useEffect(() => {
		loadMovies(
			sortQuery,
			adult_URL,
			movieLength,
			startYear,
			endYear,
			genreList_URL,
			provider_URL,
			region
		);
		getUserRegion();
	}, []);

	useEffect(() => setRegion(userRegion), [userRegion]);

	const getContent = () => {
		if (isSubmitted) {
			if (isError) {
				navigate(`moodies/error=true`);
			} else if (isLoading) {
				navigate(`moodies/loading=true`);
			} else if (isSubmitted && !genreList_URL) {
				navigate(`moodies/genre=false`);
			} else if (isSubmitted && !movies.length) {
				navigate(`moodies/too-picky=true`);
			} else {
				navigate(`
					moodies
					/suggestions
					/${sortQuery}
					/${adult_URL}
					/${movieLength}	
					/${genreList_URL}
					/${startYear}
					/${endYear}
					/${region}	
					/${provider_URL}
				`);
			}
		}
	};

	useEffect(() => {
		getContent();
	}, [movies]);

	useEffect(() => {
		nicheSelected ? window.scrollBy(0, 500) : window.scrollBy(0, 0);
	}, [nicheSelected]);

	const selectionHandler = {
		genre: (index) => {
			const newGenre = [...genre];
			newGenre[index] = !newGenre[index];
			setGenre(newGenre);
		},

		year: (index, year) => {
			if (index < 5) {
				setAgeSelected(
					ageSelected.map((value, n) => (n === index ? !value : false))
				);
				setStartYear(age[index].id);
				setEndYear(age[index].endYear);
			} else if (year === "start") {
				setStartYear(index);
				setAgeSelected(ageSelected.fill(false));
				startYear >= endYear && setEndYear(index);
			} else {
				setEndYear(index);
				setAgeSelected(ageSelected.fill(false));
			}
		},

		provider: (index) => {
			const newProvider = [...watchProvider];
			newProvider[index] = !newProvider[index];
			setWatchProvider(newProvider);
		},

		region: (region) => setRegion(region),
	};

	//console.log(movies);
	// console.log(`genre id is ${genre}`);
	// console.log(`watch provider id is ${watchProvider}`);
	// console.log(`start year is ${startYear}`);
	// console.log(`end year is ${endYear}`);
	// console.log(`url is ${url}`);
	return (
		<div className="App-main lg:w-[1024px] mx-auto p-5 ">
			<div className="w-full ">
				<Header
					watchProvider={watchProvider}
					selectionHandler={selectionHandler.provider}
					region={region}
					regionHandler={selectionHandler.region}
				/>
				<div className="justify-center mt-12 mb-5 mx-auto text-center w-full">
					<h3 className="text-xl text-white font-medium ">
						what are you in the mood for?
					</h3>
					<Icons
						category={genresIcons}
						handler={selectionHandler.genre}
						genre={genre}
					/>

					<h3 className="text-xl text-white font-medium mt-6 mb-5 ">
						what era do you want to visit?
					</h3>
					{/* <EraBubbles
						category={age}
						handler={selectionHandler.year}
						ageSelected={ageSelected}
					/> */}

					<Bubbles
						category={age}
						handler={selectionHandler.year}
						ageSelected={ageSelected}
					/>

					<SelectionBox
						genre={genre}
						generes={generes}
						startYear={startYear}
						endYear={endYear}
						genresIcons={genresIcons}
						handler={selectionHandler}
						age={age}
						ageSelected={ageSelected}
						sortQuery={sortQuery}
						isAdult={isAdult}
						movieLength={movieLength}
					/>
					<div className="flex w-full justify-center ">
						<div className="flex flex-col sm:flex-row ">
							<button
								onClick={() => {
									setIsOptionsOn(!isOptionsOn);
									setNicheSelected(!nicheSelected);
								}}
								className={
									!nicheSelected
										? "m-3 mr-0 sm:mr-10 my-5 sm:my-9 w-44 btn-primary"
										: "m-3 mr-0 sm:mr-10 my-5 sm:my-9 w-44 btn-primary-selected"
								}
							>
								niche taste
							</button>
							<ServiceSelector
								watchProvider={watchProvider}
								selectionHandler={selectionHandler.provider}
							/>
							<button
								onClick={() => {
									setIsSubmitted(true);
									loadMovies(
										sortQuery,
										adult_URL,
										movieLength,
										startYear,
										endYear,
										genreList_URL,
										provider_URL,
										region
									);
								}}
								className="
							m-3 ml-3 sm:ml-10 my-5 sm:my-9
							w-44
							btn-primary"
								data-bs-toggle="tooltip"
								data-bs-placement="right"
								title="Tip! You won't always get the same results from the same choices."
							>
								show movies
							</button>
						</div>
					</div>
					<Outlet />
					{isOptionsOn && (
						<div>
							<Niche
								isAdult={isAdult}
								setIsAdult={setIsAdult}
								movieLength={movieLength}
								setMovieLength={setMovieLength}
								sortQuery={sortQuery}
								setSortQuery={setSortQuery}
							/>
							<Options handler={selectionHandler.genre} genre={genre} />
							<TimeSlider
								handler={selectionHandler.year}
								startYear={startYear}
								endYear={endYear}
							/>
						</div>
					)}
				</div>
			</div>
			<div className="backGround"></div>
		</div>
	);
}

export default App;
