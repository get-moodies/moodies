import { useState, useEffect } from "react";
import { useNavigate,Outlet } from "react-router-dom";
import useResults from './components/useResults';

import "./index.css";

import Header from "./components/Header";
import Bubbles from "./components/Bubbles";
import Icons from "./components/Icons";
import Options from "./components/Options";
import TimeSlider from "./components/TimeSlider";
import SelectionBox from "./components/SelectionBox";

import { generes, genera, age, providers } from "./data";

function App() {
	const [genre, setGenre] = useState(new Array(generes.length).fill(false));
	const [startYear, setStartYear] = useState(1950);
	const [endYear, setEndYear] = useState(2022);
	const [watchProvider, setWatchProvider] = useState(new Array(providers.length).fill(false));
	const [isOptionsOn, setIsOptionsOn] = useState(false);
	const [region, setRegion] = useState("DE");
	const [userRegion, setUserRegion] = useState('');
	const navigate = useNavigate();
	const {loadMovies, isLoading, isError, movies} = useResults()
	
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
			});

	useEffect( () => {
			loadMovies(
				startYear, 
				endYear, 
				genreList_URL, 
				provider_URL, 
				region	
				)
			getUserRegion()
		}, [])	
	useEffect(()=>setRegion(userRegion),[userRegion])

	const getContent = () => {
		if (isError) {navigate(`error=true`)}
		else if (isLoading) {navigate(`loading=true`)}
		else if (!movies.length) {navigate(`too-picky=true`)}
		else if (!genreList_URL)	{navigate(`genre=false`)}
		else{navigate(`
				moodies
				/suggestions
				/${genreList_URL}
				/${startYear}
				/${endYear}
				/${region}	
				/${provider_URL}	
			`); 
		}
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
		(index) => {
			const newProvider = [...watchProvider];
			newProvider[index] = !newProvider[index];
			setWatchProvider(newProvider);
		},
	];

	const regionHandler = (region) => setRegion(region);

	//console.log(movies);
	// console.log(`genre id is ${genre}`);
	// console.log(`watch provider id is ${watchProvider}`);
	// console.log(`start year is ${startYear}`);
	// console.log(`end year is ${endYear}`);
	// console.log(`url is ${url}`);

	return (
		<div className="App-main lg:w-[1024px] mx-auto p-5 ">
			<div className="w-full">
				<Header
					watchProvider={watchProvider}
					selectionHandler={selectionHandler[2]}
					region={region}
					regionHandler={regionHandler}
				/>
				<div className="justify-center  mx-auto text-center w-full">
					<h3 className="text-xl text-white font-medium first-letter:text-3xl">
						Which mood are you in?
					</h3>
					<Icons category={genera} handler={selectionHandler[0]} genre={genre}/>

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
						onClick={() => {
							loadMovies(
								startYear, 
								endYear, 
								genreList_URL, 
								provider_URL, 
								region	
								)
							getContent()}}
						className="
							shadow-lg 
							m-1 my-5 
							w-44
							h-10
							bg-opacity-40 bg-black 
							hover:bg-black hover:bg-opacity-60 
							px-4 py-2 
							rounded-full 
							font-medium text-sm text-white
						"
					>
						Show me movies!
					</button>
					<button
						onClick={() => setIsOptionsOn(!isOptionsOn)}
						className="shadow-lg 
						m-1 my-5 
						w-44
						h-10
						bg-opacity-40 bg-black 
						hover:bg-black hover:bg-opacity-60 
						px-4 py-2 
						rounded-full 
						font-medium text-sm text-white"
					>
						Particular Taste?
					</button>

					{isOptionsOn && (
						<div>
							<Options handler={selectionHandler[0]} genre={genre}/>
							<TimeSlider
								handler={selectionHandler[1]}
								startYear={startYear}
								endYear={endYear}
							/>
						</div>
					)}
					<Outlet/>
					{/* {isSubmitted && <div>{getContent()}</div>} */}
				</div>
			</div>
			<div className="backGround"></div>
		</div>
	);
}

export default App;

