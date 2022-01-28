export default function MovieList({ movies }) {
	return movies
		.splice(0, 3)
		.map(({ title, overview, backdrop_path, poster_path, release_date }) => (
			<div className="hover:scale-105 transition-all duration-700 shadow-lg hover:shadow-xl relative max-w-xl h-[150px] mx-auto my-5 bg-black bg-opacity-40  pr-1 rounded-r-full rounded-l-[1800px] flex items-center text-left space-x-4 overflow-hidden">
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
						<button className="-mb-10 w-20 mt-3 mr-2 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900">
							watch
						</button>
					</div>
				</div>
			</div>
		));
}
