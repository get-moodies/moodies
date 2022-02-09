//import { useState } from "react";

export default function RenderLists( {listInfo, listHandler}) {
	console.log("inside render",listInfo)
	const list = listInfo.movies_full
	
	//const [editDisplay, setEditDisplay] = useState("default");
	return (
		<>
			{/* {(() => {
				// if (editDisplay === "default") {
					return (
						<> */}
							<div className="mb-4 mt-6 ">
								<h2 className="text-lg font-medium text-white  mb-5 text-center">
									{listInfo.name}
								</h2>

								<h2 className={"text-base font-medium text-white mb-6 my-auto"}>
									{listInfo.tags.map((tag, index) => (
										<span key={index}>#{tag} </span>
									))}
								</h2>
							</div>
							<div className="mb-4 flex items-center justify-around">
								<button className="btn-primary " onClick={()=> listHandler(null)}> X </button> 

								{/* <button
									className="btn-primary w-36"
									onClick={() => {
										
									}}
								>
									edit name
								</button>
								<button
									className="btn-primary w-36"
									onClick={() => {
										
									}}
								>
									add tag
								</button>
								<button className="btn-primary w-36">add movie</button>
								<button className="btn-primary w-36">delete list</button> */}
							</div>
						{/* </>
					)})} */}

			<div className=" justify-center w-full border-4 border-white h-[390px] overflow-scroll p-4 rounded-xl">
				{list.map(
					(
						{ data },
						index
					) => {
						const { title, overview, backdrop_path, poster_path, release_date } = data
						const netflixQuery = title.split(" ").join("%20");
						// const amazonQuery = title.split(" ").join("+");
						const netflixUrl = `https://www.netflix.com/search?q=${netflixQuery}`;
						// const amazonUrl = `https://www.amazon.de/s?k=${amazonQuery}&i=instant-video&crid=8PUTSZSV6RPC&sprefix=fight+club%2Cinstant-video%2C301&ref=nb_sb_noss_1`;
						// const disneyUrl = "https://www.disneyplus.com/search";
						// const dummyUrl = `https://google.com/search?q=Where+Can+I+Watch+${amazonQuery}`;

						// const movieSearch2 = {
						// 	8: () => netflixUrl,
						// 	9: () => amazonUrl,
						// 	3: () => disneyUrl,
						// 	default: () => dummyUrl,
						// };

						return (
							<div key={index} >
								<div className="hover:scale-105 hover:outline- transition-all duration-700 shadow-lg hover:shadow-xl relative w-11/12 h-[60px] mx-auto mb-3 bg-black bg-opacity-40  pr-1 rounded-r-full rounded-l-[1800px] flex items-center text-left space-x-4 overflow-hidden">
									<div className="shrink-0 h-[200px] w-[200px] ">
										<img
											className="relative -left-20 h-full w-full object-cover object-center [clip-path:circle(45%_at_50%_50%)]"
											src={
											 backdrop_path
											     ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
											     : `https://image.tmdb.org/t/p/w500${poster_path}`
											}
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
					}
				)}
			</div>
		</>
	)
}
 {/* else if (editDisplay === "editname") { */}
			// 		return (
			// 			<>
			// 				<div className="mb-4 mt-6">
			// 					<input
			// 						className="
            //                     form-control
            //                     block
            //                     w-lg
			// 					mx-auto
            //                     px-3
            //                     py-1.5
            //                     text-base
            //                     font-normal
            //                     text-gray-700
            //                     bg-white bg-clip-padding
            //                     border border-solid border-gray-300
            //                     rounded
            //                     transition
            //                     ease-in-out
            //                     mt-2
			// 					mb-3
            //                     focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
			// 						id="info"
			// 						type="info"
			// 						name="info"
			// 						placeholder={"change playlist name..."}
			// 					/>
			// 					<h2 className={"text-base font-medium text-white mb-2 my-auto"}>
			// 						{allLists.public[selectedIndex].tags.map((tag, index) => (
			// 							<>#{tag} </>
			// 						))}
			// 					</h2>
			// 				</div>
			// 				<div className="mb-4 flex items-center justify-around">
			// 					<button
			// 						className="btn-primary w-36"
			// 						onClick={() => {
			// 							setEditDisplay("default");
			// 						}}
			// 					>
			// 						submit
			// 					</button>
			// 				</div>
			// 			</>
			// 		);
			// 	} else if (editDisplay === "addtag") {
			// 		return (
			// 			<>
			// 				<div className="mb-4 mt-6 ">
			// 					<h2 className="text-lg font-medium text-white  mb-2 text-center">
			// 						{allLists.public[selectedIndex].name}
			// 					</h2>
			// 					<input
			// 						className="
            //                     form-control
            //                     block
			// 					w-lg
			// 					mx-auto
            //                     px-3
            //                     py-1.5
            //                     text-base
            //                     font-normal
            //                     text-gray-700
            //                     bg-white bg-clip-padding
            //                     border border-solid border-gray-300
            //                     rounded
            //                     transition
            //                     ease-in-out
            //                     mt-2
            //                     focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
			// 						id="info"
			// 						type="info"
			// 						name="info"
			// 						placeholder={"add tag..."}
			// 					/>
			// 				</div>
			// 				<div className="mb-4 flex items-center justify-around">
			// 					<button
			// 						className="btn-primary w-36"
			// 						onClick={() => {
			// 							setEditDisplay("default");
			// 						}}
			// 					>
			// 						submit
			// 					</button>
			// 				</div>
			// 			</>
			// 		);
			// 	}
			// })()}