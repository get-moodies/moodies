export default function PublicList({ allLists, selectedIndex }) {
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

	return (
		<>
			<div className="mb-4 mt-6 ">
				<h2 className="text-lg font-medium text-white  mb-2 text-center">
					{allLists.public[selectedIndex].name}
				</h2>
				<h2 className={"text-base font-medium text-white mb-2 my-auto"}>
					{allLists.public[selectedIndex].tags.map((tag, index) => (
						<>#{tag} </>
					))}
				</h2>
			</div>
			<div className="mb-4 flex items-center justify-around">
				<button className="btn-primary">edit</button>
			</div>
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
												<button className=" w-20  mr-2 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900">
													delete
												</button>

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
		</>
	);
}
