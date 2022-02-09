import { useState } from "react";
import { useEffect } from "react";

import useLists from "../components/useLists";
import useUsers from "../components/useUsers";

import RenderList from "../components/RenderList";

export default function Playlists() {
	const {
		getPublicLists,
		getAllLists,
		deleteList,
		editList,
		addList,
		publicLists,
		getAllPublicAllUsers,
		searchByTags,
		allPublicAllUsers,
	} = useLists();

	const {
		allUsers,
		getAllUsers,
		getUserPublic,
		getUser,
		register,
		deleteUser,
		login,
		editUser,
	} = useUsers();

	const [allPublicPlaylists, setAllPublicPlaylists] = useState([]);
	const [selectedList, setSelectedList] = useState(null);
	useEffect(() => {
		getAllPublicAllUsers();
	}, []);
	// searchByTags("test, rainy days")

	const listHandler = (index) => {
		index === null ? setSelectedList(null) : setSelectedList(index);
	};

	return (
		<>
			<h1 className="text-2xl font-medium text-white text-left mt-12 mb-6">
				search playlists
			</h1>
			<div>
				<input
					className="
        form-control
        block
        w-full
        h-10
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mr-3
        mt-5
        focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
					id="info"
					type="info"
					name="info"
					placeholder={" search for playlists..."}
				/>
				<button className="btn-primary mt-5 w-32">search</button>
			</div>
			<h1 className="text-2xl font-medium text-white text-left mt-12 mb-6">
				browse playlists
			</h1>
			<div
				className="
                mx-auto  
                flex flex-wrap items-center justify-around 
                max-h-[30%]
               
                "
			>
				{allPublicAllUsers.map((list, index) => (
					<div
						key={list._id}
						className="
                                                    bg-black bg-opacity-40
                                                    hover:scale-105 hover:shadow-2xl
                                                    transition-all duration-500 
                                                    shadow-xl  
                                                    m-3 p-3
                                                    rounded-lg 
                                                    hover:cursor-pointer            
                                                    justify-center
                                                    text-white"
						onClick={() => listHandler(index)}
					>
						<h2 className="text-lg font-medium text-white  mb-5 text-center ">
							{list.name}
						</h2>
						<span className="text-base font-semibold text-white  mb-5 text-center">
							tags:{" "}
						</span>
						{list.tags?.map(
							(tag, index) =>
								(
									<span
										className="text-base font-medium text-white  mb-5 text-center"
										key={index}
									>
										#{tag + " "}
									</span>
								) || (
									<span className="text-base font-medium text-white  mb-5 text-center">
										no tags here yet{" "}
									</span>
								)
						)}
						<br />
						<span className="text-base font-semibold text-white  mb-5 text-center">
							{" "}
							by:{" "}
						</span>
						{list.editRight.map((user, index) => (
							<span
								className="text-base font-medium text-white  mb-5 text-center"
								key={index}
							>
								{user}
							</span>
						))}
					</div>
				))}
			</div>
			{(selectedList || selectedList === 0) && (
				<div className="px-8 h-[600px] pt-0 pb-8 ml-0 md:ml-6 mb-4 border-0 border-white w-full mt-0">
					<RenderList
						listInfo={allPublicAllUsers[selectedList]}
						listHandler={listHandler}
					/>

					{/* {(() => {
						if (activeList === "WatchLater") {
							return <WatchLater />;
						} else if (activeList === "HiddenList") {
							return <HiddenList />;
						} else if (activeList === `public${selectedIndex}`) {
							return (
								<PublicList selectedIndex={selectedIndex} allLists={allLists} />
							);
						} else if (activeList === `private${selectedIndex}`) {
							return (
								<PrivateList
									selectedIndex={selectedIndex}
									allLists={allLists}
								/>
							);
						}
					})()} */}
				</div>
			)}
		</>
	);
}
