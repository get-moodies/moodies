export default function ProfileList({ movieData }) {
	return (
		<>
			<div className=" justify-center w-full border-4 border-white h-[390px] overflow-scroll p-4 rounded-xl">
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

				{/* {movieData.map(({ data }, index) => {
							return <div key={index}>{data.title}</div>;
						})} */}
			</div>
		</>
	);
}
