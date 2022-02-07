import { useState, useEffect } from "react";
import face from "../images/face.png";
import { useParams } from "react-router-dom";
import useUsers from "../components/useUsers";
import useLists from "../components/useLists";

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

export default function Profile() {
	const [activeList, setActiveList] = useState(0);

	const [selectedIndex, setSelectedIndex] = useState(0);

	const { user } = useParams();
	const { getUserPublic, publicUserData } = useUsers();

	const {
		getPublicLists,
		getAllLists,
		deleteList,
		editList,
		addList,
		publicLists,
		allLists,
	} = useLists();

	useEffect(() => {
		getUserPublic(user);
	}, []);

	useEffect(() => {
		getPublicLists(user);
	}, []);

	console.log(publicUserData);

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
						{publicUserData.userName}
					</h1>

					{publicUserData.info ? (
						<p className="text-md font-medium text-white mt-2 mb-8">
							{publicUserData.info}
						</p>
					) : (
						<p className="text-md font-medium text-white mt-2 mb-8">
							i am an awesome moodies user
						</p>
					)}
				</div>
			</div>

			<div className="flex flex-col sm:flex-row">
				<div className="flex flex-col">
					<h1 className="text-2xl font-medium text-white text-left mt-8">
						playlists
					</h1>
					<div>
						<h1 className="text-lg font-medium text-white mt-6 mb-3 ml-1 text-left">
							public lists
						</h1>
						{publicUserData.publicLists.length ? (
							<div className="flex flex-col justify-left">
								{publicLists.public.map((list, index) => (
									<button
										className={
											activeList !== `public${index}`
												? "btn-primary mb-2 mr-5 w-44"
												: "btn-primary-selected mb-2 mr-5 w-44"
										}
										key={list._id}
										onClick={() => {
											setActiveList(`public${index}`);
											setSelectedIndex(index);
										}}
									>
										{list.name}
									</button>
								))}
							</div>
						) : (
							<p className="text-sm font-base text-white mt-3 mb-3 ml-1 text-left">
								no public lists yet
							</p>
						)}
					</div>
				</div>

				<div className="px-8 h-[600px] pt-0 pb-8 mb-4 border-0 border-white w-full  mt-0 ">
					<h1 className="text-2xl font-medium text-white text-left mt-8 mb-3 ">
						selected playlist
					</h1>

					<div className="mb-4 mt-6 ">
						<h2 className="text-lg font-medium text-white  mb-2 text-center">
							{publicLists.public[selectedIndex].name}
						</h2>
						<h2 className={"text-base font-medium text-white mb-2 my-auto"}>
							{publicLists.public[selectedIndex].tags.map((tag, index) => (
								<>#{tag} </>
							))}
						</h2>
					</div>

					<div className=" justify-center w-full border-4 border-white h-[390px] overflow-scroll p-4 rounded-xl">
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
									<div key={index}>
										<div className="hover:scale-105 hover:outline- transition-all duration-700 shadow-lg hover:shadow-xl relative w-11/12 h-[60px] mx-auto mb-3 bg-black bg-opacity-40  pr-1 rounded-r-full rounded-l-[1800px] flex items-center text-left space-x-4 overflow-hidden">
											<div className="shrink-0 h-[200px] w-[200px] ">
												<img
													className="relative -left-20 h-full w-full object-cover object-center [clip-path:circle(45%_at_50%_50%)]"
													src={backdrop_path}
													// src={
													//  backdrop_path
													//      ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
													//      : `https://image.tmdb.org/t/p/w500${poster_path}`
													// }
													alt="movie image"
												/>
											</div>
											<div className="w-full  ">
												<div className="flex justify-between">
													<div>
														<p className="text-lg font-medium line-clamp-1 text-white mt-1 -ml-24 ">
															{title}
															<span className="text-base font-light    text-white">{` (${release_date.substring(
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
					</div>
				</div>
			</div>
		</>
	);
}
