export default function MovieList({ movies, watchProvider }) {
	//console.log(`watch provider MovieList page ${watchProvider}`);

	return movies
		.splice(0, 3)
		.map(({ title, overview, backdrop_path, poster_path, release_date }) => {
			const netflixQuery = title.split(" ").join("%20");
			const amazonQuery = title.split(" ").join("+");
			const netflixUrl = `https://www.netflix.com/search?q=${netflixQuery}`;
			const amazonUrl = `https://www.amazon.de/s?k=${amazonQuery}&i=instant-video&crid=8PUTSZSV6RPC&sprefix=fight+club%2Cinstant-video%2C301&ref=nb_sb_noss_1`;
			const disneyUrl = "https://www.disneyplus.com/search";
			const dummyUrl = `https://google.com/search?q=Where+Can+I+Watch+${amazonQuery}`;

			// console.log(netflixUrl);
			// console.log(amazonUrl);
			// console.log(disneyUrl);

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
				default: () => dummyUrl
			}

			// const noServiceHandler = (watchProvider) => {
			// 	if (!watchProvider[0] && !watchProvider[1] && !watchProvider[2]) {
			// 		alert(
			// 			"We can take you directly to the streaming provider if you select the services you're subscribed to on the selection page. (Hi mom!)"
			// 		);
			// 	}
			// };

			return (
				<div key={title} className="hover:scale-105 transition-all duration-700 shadow-lg hover:shadow-xl relative max-w-xl h-[150px] mx-auto my-5 bg-black bg-opacity-40  pr-1 rounded-r-full rounded-l-[1800px] flex items-center text-left space-x-4 overflow-hidden">
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
						{title.length > 28 ? (
							<p className="text-lg font-medium truncate text-white ">
								{`${title.substring(0, 28)}...`}
								<span className="text-base font-light	 text-white">{` (${release_date.substring(
									0,
									4
								)})`}</span>{" "}
							</p>
						) : (
							<p className="text-lg font-medium line-clamp-1 text-white ">
								{title}
								<span className="text-base font-light	 text-white">{` (${release_date.substring(
									0,
									4
								)})`}</span>{" "}
							</p>
						)}

						<p className="text-white text-sm  line-clamp-2 ">{overview}</p>
						<div className="mt-1">
							<button className="-mb-10 w-20 hidden md:inline mt-3 mr-2 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900">
								trailer
							</button>
							<button className="-mb-10 w-20 mt-3 mr-2 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900">
								save
							</button>
							<a
								href={(movieSearch2[watchProvider?.charAt(0)]||movieSearch2.default)()} 
								target="_blank"
							>
							<button className="-mb-10 w-20 mt-3 mr-2 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900">
								watch
							</button>
							</a>
						</div>
					</div>
				</div>
			);
		});
}
