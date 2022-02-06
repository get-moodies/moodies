import { useState } from "react";
import face from "../images/face.png";
import { useParams } from "react-router-dom";

const moviesTemplate = ["movie 1", "movie 2", "movie 3", "movie 4"];
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

export default function Profile() {
	const [isListActive, setIsListActive] = useState(false);
	//const {user} = useParams();

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

					<p className="text-md font-medium text-white mt-2">
						"my type is dark fairy"
					</p>
					<button className="btn-primary mt-4 mb-8">edit</button>
				</div>
			</div>
			<h1 className="text-2xl font-medium text-white text-left mt-8">
				playlists
			</h1>
			<div className="flex flex-col sm:flex-row">
				<div className="flex flex-col">
					<div>
						<h1 className="text-lg font-medium text-white mt-6 mb-3 ml-1 text-left">
							main lists
						</h1>
						<div className="flex flex-col justify-left">
							<button
								className="btn-primary mb-2 mr-5 w-44"
								onClick={() => setIsListActive(!isListActive)}
							>
								watch later
							</button>
							<button className="btn-primary mb-2  mr-5 w-44">hidden</button>
						</div>
					</div>
					<div>
						<h1 className="text-lg font-medium text-white mt-6 mb-3 ml-1 text-left">
							public lists
						</h1>
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
					</div>
					<div>
						<h1 className="text-lg font-medium text-white mt-6 mb-3 ml-1  text-left">
							private lists
						</h1>
						<div className="flex flex-col justify-left">
							{user.privateLists.map((list) => (
								<button
									className="btn-primary mb-2 mr-5 w-44 truncate"
									key={list}
									onClick={() => setIsListActive(!isListActive)}
								>
									{list}
								</button>
							))}
						</div>
					</div>
				</div>
				<div className="px-8 h-[600px] pt-0 pb-8 mt-0 mb-4 border-0 border-white w-full">
					<div
						className={
							isListActive
								? `transition-all duration-700 w-full`
								: `transition-all duration-700 hidden`
						}
					>
						<div className="mb-4 ">
							<h2 className="text-lg font-medium text-white  mb-2 text-center">
								active list name
							</h2>
							<h2 className={"text-base font-medium text-white mb-2 my-auto"}>
								{" "}
								description of active list{" "}
							</h2>
							<p className=" text-md font-normal text-white text-center">
								#first_tag #second_tag #third_tag
							</p>
						</div>
						<div className="mb-4 flex items-center justify-around">
							<button className="btn-primary">edit</button>
						</div>
						<div className=" justify-center w-full border-4 border-white h-[390px] overflow-scroll p-4 rounded-xl">
							{moviesTemplate.map((movie) => (
								<div className="mb-4 flex justify-center w-full" key={movie}>
									<div
										className="
                            hover:scale-110 hover:outline-4 
                            hover:outline-slate-400/40 hover:outline 
                            hover:outline-offset-0 hover:shadow-xl 
                            transition-all duration-700 \
                            shadow-lg 
                            w-full
                            min-h-[110px] 
                            bg-black bg-opacity-40  
                            pr-1 
                            rounded-r-full 
                            rounded-l-[1800px] 
                            flex justify-begin content-center
                            space-x-4 
                            overflow-hidden
                            "
									>
										<h1
											className={"text-xl font-bold text-white my-auto ml-5 "}
										>
											{" "}
											{movie}{" "}
										</h1>
										<h2 className={"text-lg font-bold text-white my-auto"}>
											{" "}
											Info{" "}
										</h2>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
