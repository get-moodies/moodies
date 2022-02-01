import { Link } from "react-router-dom";
import Trailer from "./Trailer";
import { Grow } from "@mui/material";
import { useState } from "react";

export default function MovieList({ movies, watchProvider }) {
	//console.log(`watch provider MovieList page ${watchProvider}`);
	// const [hoverState, setHoverState] = useState(false);

	return (
		<>
			<h3 className="text-xl text-white font-medium first-letter:text-3xl mb-7">
				Your movie recommendations are...
			</h3>

			{movies
				.splice(0, 4)
				.map(
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
						const timeDelay = parseInt(`${index}00`) + 800;
						// console.log(netflixUrl);
						// console.log(amazonUrl);
						// console.log(disneyUrl);

						// const handleMouseEnter = () => {
						// 	setHoverState(true);
						// };
						// const handleMouseLeave = () => {
						// 	setHoverState(false);
						// };
						const movieSearch = (watchProvider) => {
							if (watchProvider[0]) {
								return netflixUrl;
							} else if (watchProvider[2]) {
								return amazonUrl;
							} else if (watchProvider[1]) {
								return disneyUrl;
							} else {
								return dummyUrl;
							}
						};
						const movieSearch2 = {
							8: () => netflixUrl,
							9: () => amazonUrl,
							3: () => disneyUrl,
							default: () => dummyUrl,
						};

						// const noServiceHandler = (watchProvider) => {
						// 	if (!watchProvider[0] && !watchProvider[1] && !watchProvider[2]) {
						// 		alert(
						// 			"We can take you directly to the streaming provider if you select the services you're subscribed to on the selection page. (Hi mom!)"
						// 		);
						// 	}
						// };

						return (
							<div>
								<Grow in={true} timeout={timeDelay}>
									<div
										// style={
										// 	hoverState && {
										// 		transition: "all ease-in-out .4s",
										// 		transform: "scale(1.05) ",
										// 	}
										// }
										// onMouseEnter={handleMouseEnter}
										// onMouseLeave={handleMouseLeave}
										className="hover:scale-150 hover:outline-4 hover:outline-slate-400/40  hover:outline hover:outline-offset-0 transition-all duration-700 shadow-lg hover:shadow-xl relative max-w-2xl h-[150px] mx-auto my-5 bg-black bg-opacity-40  pr-1 rounded-r-full rounded-l-[1800px] flex items-center text-left space-x-4 overflow-hidden"
									>
										<div className="shrink-0 h-[200px] w-[200px] ">
											<img
												className="relative -left-10 h-full w-full object-cover object-center [clip-path:circle(45%_at_50%_50%)]"
												src={
													backdrop_path
														? `https://image.tmdb.org/t/p/w500${backdrop_path}`
														: `https://image.tmdb.org/t/p/w500${poster_path}`
												}
												alt="movie image"
											/>
										</div>
										<div className=" relative -left-10	 -mt-3">
											<p className="text-lg font-medium line-clamp-1 text-white ">
												{title}
												<span className="text-base font-light	 text-white">{` (${release_date.substring(
													0,
													4
												)})`}</span>{" "}
											</p>

											<p className="text-white text-sm  line-clamp-2 ">
												{overview}
											</p>
											<div className="mt-1">
												<button className="-mb-10 w-20 mt-3 mr-2  hidden md:inline bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900">
													hide
												</button>
												<button className="-mb-10 w-20 mt-3 mr-2 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900">
													save
												</button>
												<Trailer title={title} />
												<a
													href={(
														movieSearch2[watchProvider?.charAt(0)] ||
														movieSearch2.default
													)()}
													target="_blank"
												>
													<button className="-mb-10 w-20 mt-3 mr-2 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900">
														watch
													</button>
												</a>
											</div>
										</div>
									</div>
								</Grow>
							</div>
						);
					}
				)}

			<button
				className="
							shadow-lg 
							m-1 
							w-44
							h-10
							bg-opacity-40 bg-black 
							hover:bg-black hover:bg-opacity-60 
							px-4 py-2 
							rounded-full 
							font-medium text-sm text-white
						"
			>
				<Link to="/">change mood</Link>
			</button>
		</>
	);
}
