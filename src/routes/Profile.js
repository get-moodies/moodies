import { useState, useEffect } from "react";
import face from "../images/face.png";
import { useParams } from "react-router-dom";
import useUsers from "../components/useUsers";
import useLists from "../components/useLists";
import moodiescover from "../images/moodiescover.jpeg";

export default function Profile() {
	const [activeList, setActiveList] = useState("public0");

	const [selectedIndex, setSelectedIndex] = useState(0);

	const [playlistId, setPlaylistId] = useState("");

	const { user } = useParams();
	const { getUserPublic, publicUserData } = useUsers();

	const defaultImage = moodiescover;
	const apiImage = publicUserData.image || defaultImage;
	// const apiImage =
	// 	"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.doblu.com%2Fwp-content%2Fuploads%2F2018%2F12%2FEVIL-DEAD-2_t00.mkv_snapshot_00.59.09_2018.12.16_14.15.38.jpg";

	// const initialPlaylistState = publicLists.public[0]._id;

	const {
		getPublicLists,
		getAllLists,
		deleteList,
		editList,
		addList,
		getMovies,
		movieData,
		publicLists,
		allLists,
	} = useLists();

	useEffect(() => {
		getUserPublic(user);
	}, []);

	useEffect(() => {
		getPublicLists(user);
	}, []);

	useEffect(() => {
		publicLists.public.length && setPlaylistId(publicLists.public[0]._id);
	}, [publicLists]);

	useEffect(() => {
		getMovies(user, playlistId);
	}, [playlistId]);

	// console.log(selectedIndex);
	// console.log(playlistId);
	// console.log(movieData[0].data.title);

	return (
		<>
			<div className="flex mb-4">
				<div>
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
				</div>
				<div className="mt-12 px-12 w-full  border-b-2 ">
					{" "}
					{/* <h1 className="text-2xl font-medium text-white text-left ">
						cover image
					</h1> */}
					<div className="flex justify-center w-full">
						<div
							className="shadow-lg bg-center mt-12 ml-6 opacity-90 overflow-hidden text-justify h-[240px] rounded-lg w-full"
							style={
								!apiImage
									? {
											backgroundImage: `url(${apiImage})`,
											backgroundSize: "cover",
											overflow: "hidden",
									  }
									: {
											backgroundImage: `url(${moodiescover})`,
											backgroundSize: "cover",
											overflow: "hidden",
									  }
							}
						></div>
						{/* <img className="h-40" src={apiImage} alt="test cover fetch" /> */}
					</div>
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
											setPlaylistId(publicLists.public[index]._id);
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

				<div className="px-8 h-[600px] pt-0 pb-8 mb-12 border-0 border-white w-full  mt-0 ">
					<h1 className="text-2xl font-medium text-white text-left mt-8 mb-3 ">
						selected playlist
					</h1>

					<div className="mb-4 mt-6 ">
						<h2 className="text-lg font-medium text-white  mb-5 text-center">
							{publicLists.public[selectedIndex]?.name}
						</h2>
						<h2 className={"text-base font-medium text-white mb-8 my-auto"}>
							{publicLists.public[selectedIndex]?.tags.map((tag, index) => (
								<>#{tag} </>
							))}
						</h2>
					</div>

					<div className=" justify-center w-full border-4 border-white h-[390px] overflow-scroll p-4 rounded-xl">
						{publicLists.public.length ? (
							<>
								{movieData.map(({ data }, index) => {
									const netflixQuery = data.title?.split(" ").join("%20");
									//	const amazonQuery = title.split(" ").join("+");
									const netflixUrl = `https://www.netflix.com/search?q=${netflixQuery}`;
									//	const amazonUrl = `https://www.amazon.de/s?k=${amazonQuery}&i=instant-video&crid=8PUTSZSV6RPC&sprefix=fight+club%2Cinstant-video%2C301&ref=nb_sb_noss_1`;
									//	const disneyUrl = "https://www.disneyplus.com/search";
									//	const dummyUrl = `https://google.com/search?q=Where+Can+I+Watch+${amazonQuery}`;
									// const movieSearch2 = {
									// 	8: () => netflixUrl,
									// 	9: () => amazonUrl,
									// 	3: () => disneyUrl,
									// 	default: () => dummyUrl,
									// };
									return (
										<div key={index}>
											<div className="hover:scale-105 hover:outline- transition-all duration-700 shadow-lg hover:shadow-xl relative w-11/12 h-[60px] mx-auto mb-3 bg-black bg-opacity-40  pr-1 rounded-r-full rounded-l-[1800px] flex items-center text-left space-x-4 overflow-hidden">
												<div className="shrink-0 h-[200px] w-[200px] ">
													<img
														className="relative -left-20 h-full w-full object-cover object-center [clip-path:circle(45%_at_50%_50%)]"
														// src={data.backdrop_path}
														src={
															data.backdrop_path
																? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
																: `https://image.tmdb.org/t/p/w500${data.poster_path}`
														}
														alt="movie image"
													/>
												</div>
												<div className="w-full  ">
													<div className="flex justify-between">
														<div>
															<p className="text-lg font-medium line-clamp-1 text-white mt-1 -ml-24 ">
																{data.title}
																<span className="text-base font-light    text-white">{` (${data.release_date.substring(
																	0,
																	4
																)})`}</span>{" "}
															</p>
														</div>
														<div className="flex">
															<a href={netflixUrl} target="_blank">
																<button className="w-20 mr-3 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900 ">
																	watch
																</button>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</>
						) : (
							<div></div>
						)}

						{/* {movieData.map(({ data }, index) => {
							return <div key={index}>{data.title}</div>;
						})} */}
					</div>
				</div>
			</div>
		</>
	);
}
