import { useState } from "react";
import face from "../images/face.png";

const moviesTemplate = [
	{
		title: "The Good Movie To Watch",
		overview:
			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
		backdrop_path:
			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
		poster_path:
			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
		release_date: "1994 05 26",
	},
	{
		title: "The Good Movie To Watch",
		overview:
			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
		backdrop_path:
			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
		poster_path:
			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
		release_date: "1994 05 26",
	},
	{
		title: "The Good Movie To Watch",
		overview:
			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
		backdrop_path:
			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
		poster_path:
			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
		release_date: "1994 05 26",
	},
	{
		title: "The Good Movie To Watch",
		overview:
			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
		backdrop_path:
			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
		poster_path:
			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
		release_date: "1994 05 26",
	},
	{
		title: "The Good Movie To Watch",
		overview:
			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
		backdrop_path:
			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
		poster_path:
			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
		release_date: "1994 05 26",
	},
	{
		title: "The Good Movie To Watch",
		overview:
			"Some very long description of things and so on etc etc etc etc etc etc etc etc etc etc ",
		backdrop_path:
			"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/107270-Interstellar_movie.jpg",
		poster_path:
			"http://www.slashfilm.com/wp/wp-content/images/2017-bestposter-hitmansbodyguard.jpg",
		release_date: "1994 05 26",
	},
];

const listsTemplate = [
	{ name: "List 1", tags: ["tag 1", "tag 2"] },
	{ name: "List 2", tags: ["tag 1 ", "tag 2 "] },
	{ name: "List 3", tags: ["tag 1", "tag 2"] },
];
const user = {
	_id: "61fbc7efd3d53fbb96ff69da",
	userName: "nick_cage64",
	modified: "2022-02-03T12:17:51.056Z",
	watchlist: ["354912", "354912", "354912", "354912"],
	privateLists: [
		"my first private list",
		"my second private list",
		"my third private list",
	],
	publicLists: [
		"my first public list",
		"my second public list",
		"my third public list",
	],
	blacklist: ["512195", "512195", "512195", "512195"],
	__v: 14,
};

export default function User() {
	const [isListActive, setIsListActive] = useState(true);
	const [isWatchListActive, setIsWatchListActive] = useState(true);
	const [isHiddenListActive, setIsHiddenListActive] = useState(false);
	const [watchLaterSelected, setWatchLaterSelected] = useState(true);
	const [hiddenSelected, setHiddenSelected] = useState(false);
	const [listName, setListName] = useState("saved");
	

	return (
		<>
			<h1 className="text-2xl font-medium text-white text-left mt-12   ">
				profile
			</h1>
			<div className="flex flex-col justify-center w-[180px] mt-6 border-b-2">
				<div className="flex justify-center w-full">
					<img className="h-40" src={face} alt="user avatar" />
				</div>
				<div>
					<h1 className="text-lg font-normal text-white text-center mt-3">
						{" "}
						{user.userName}{" "}
					</h1>

					<p className="text-md font-medium text-white mt-2 mb-8">
						"my type is dark fairy"
					</p>
					{/* <button className="btn-primary mt-4 mb-8">edit</button> */}
				</div>
			</div>

			<div className="flex flex-col sm:flex-row">
				<div className="flex flex-col">
					<h1 className="text-2xl font-medium text-white text-left mt-8">
						playlists
					</h1>
					{/* <div>
						<h1 className="text-lg font-medium text-white mt-6 mb-3 ml-1 text-left">
							main lists
						</h1>
						<div className="flex flex-col justify-left">
							<button
								className={
									!watchLaterSelected
										? "btn-primary mb-2 mr-5 w-44"
										: "btn-primary-selected mb-2 mr-5 w-44"
								}
								onClick={() => {
									setIsWatchListActive(true);
									setWatchLaterSelected(true);
									setHiddenSelected(false);
									setListName("saved");
								}}
							>
								watch later
							</button>
							<button
								className={
									!hiddenSelected
										? "btn-primary mb-2 mr-5 w-44"
										: "btn-primary-selected mb-2 mr-5 w-44"
								}
								onClick={() => {
									setIsHiddenListActive(true);
									setHiddenSelected(true);
									setWatchLaterSelected(false);
									setListName("hidden");
								}}
							>
								hidden
							</button>
						</div>
					</div> */}
					<div>
						<h1 className="text-lg font-medium text-white mt-6 mb-3 ml-1 text-left">
							public lists
						</h1>
						{user.publicLists.length ? (
							<div className="flex flex-col justify-left">
								{user.publicLists.map((list) => (
									<button
										className="btn-primary mb-2 mr-5 w-44 truncate"
										key={list}
										onClick={() => setIsListActive(!isListActive)}
									>
										{list}
									</button>
								))}
							</div>
						) : (
							<p className="text-sm font-base text-white mt-3 mb-3 ml-1 text-left">
								no public lists yet
							</p>
						)}
					</div>
					{/* <div>
						<h1 className="text-lg font-medium text-white mt-6 mb-3 ml-1  text-left">
							private lists
						</h1>
						<div className="flex flex-col justify-left">
							{user.privateLists.length ? (
								<div className="flex flex-col justify-left">
									{user.publicLists.map((list) => (
										<button
											className="btn-primary mb-2 mr-5 w-44 truncate"
											key={list}
											onClick={() => setIsListActive(!isListActive)}
										>
											{list}
										</button>
									))}
								</div>
							) : (
								<p className="text-sm font-base text-white mt-3 mb-3 ml-1 text-left">
									no private lists yet
								</p>
							)}
						</div>
					</div> */}
				</div>
				<div className="px-8 h-[600px] pt-0 pb-8 mb-4 border-0 border-white w-full  mt-0 ">
					<h1 className="text-2xl font-medium text-white text-left mt-8 mb-3 ">
						selected playlist
					</h1>
					<div
						className={
							isListActive
								? `transition-all duration-700 w-full`
								: `transition-all duration-700 hidden`
						}
					>
						<div className="mb-4 ">
							<h2 className="text-lg font-medium text-white  mb-2text-center">
								active list
							</h2>
							<h2 className={"text-base font-medium text-white mb-2 my-auto"}>
								{" "}
								{`a description of my list`}
							</h2>
							<p className=" text-md font-normal text-white text-center">
								{`#first_tag #second_tag #third_tag`}
							</p>
						</div>
						{/* <div className="mb-4 flex items-center justify-around">
							<button className="btn-primary">edit</button>
						</div> */}
						<div className=" justify-center w-full border-4 border-white h-[390px] overflow-scroll p-4 rounded-xl">
							{/* begin single playlist */}
							{moviesTemplate.map(
								(
									{ title, overview, backdrop_path, poster_path, release_date },
									index
								) => {
									const netflixQuery = title.split(" ").join("%20");
									const amazonQuery = title.split(" ").join("+");
									const netflixUrl = `https://www.netflix.com/search?q=${netflixQuery}`;
									const amazonUrl = `https://www.amazon.de/s?k=${amazonQuery}&i=instant-video&crid=8PUTSZSV6RPC&sprefix=fight+club%2Cinstant-video%2C301&ref=nb_sb_noss_1`;
									const disneyUrl = "https://www.disneyplus.com/search";
									const dummyUrl = `https://google.com/search?q=Where+Can+I+Watch+${amazonQuery}`;

									const movieSearch2 = {
										8: () => netflixUrl,
										9: () => amazonUrl,
										3: () => disneyUrl,
										default: () => dummyUrl,
									};

									return (
										<div>
											<div className="hover:scale-105 hover:outline- transition-all duration-700 shadow-lg hover:shadow-xl relative w-11/12 h-[60px] mx-auto mb-3 bg-black bg-opacity-40  pr-1 rounded-r-full rounded-l-[1800px] flex items-center text-left space-x-4 overflow-hidden">
												<div className="shrink-0 h-[200px] w-[200px] ">
													<img
														className="relative -left-20 h-full w-full object-cover object-center [clip-path:circle(45%_at_50%_50%)]"
														src={backdrop_path}
														// src={
														// 	backdrop_path
														// 		? `https://image.tmdb.org/t/p/w500${backdrop_path}`
														// 		: `https://image.tmdb.org/t/p/w500${poster_path}`
														// }
														alt="movie image"
													/>
												</div>
												<div className="w-full	">
													<div className="flex justify-between">
														<div>
															<p className="text-lg font-medium line-clamp-1 text-white mt-1 -ml-24 ">
																{title}
																<span className="text-base font-light	 text-white">{` (${release_date.substring(
																	0,
																	4
																)})`}</span>{" "}
															</p>
														</div>
														<div className="flex">
															{/* <button className=" w-20  mr-2 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900">
																delete
															</button> */}

															{/* <a
															href={(
																movieSearch2[watchProvider?.charAt(0)] ||
																movieSearch2.default
															)()}
															target="_blank"
														> */}
															<button className="w-20 mr-3 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900 ">
																watch
															</button>
															{/* </a> */}
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								}
							)}
							{/* end single playlist */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
