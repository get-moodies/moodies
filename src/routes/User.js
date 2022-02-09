import { useState, useEffect } from "react";
import face from "../images/face.png";
import { useParams } from "react-router-dom";
import useUsers from "../components/useUsers";
import useLists from "../components/useLists";
import WatchLater from "../components/WatchLater";
import HiddenList from "../components/HiddenList";
import PrivateList from "../components/PrivateList";
import PublicList from "../components/PublicList";
import PlaylistHeader from "../components/PlaylistHeader";
import RenderList from "../components/RenderList";

import moodiescover from "../images/moodiescover.jpeg";
import ProfileList from "../components/ProfileList";

export default function User() {
	const [activeList, setActiveList] = useState(`public0`);
	const [isEdit, setIsEdit] = useState(false);
	const [isUpload, setIsUpload] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [newInfo, setNewInfo] = useState("");
	const [newImage, setNewImage] = useState("");
	const [listInfo, setListInfo] = useState("");
	const [playlistId, setPlaylistId] = useState("");
	const { user } = useParams();
	const { getUser, userData, editUser } = useUsers();
	const [isPublic, setIsPublic] = useState(true);

	const defaultImage = moodiescover;
	const apiImage = userData.image || defaultImage;

	const {
		getPublicLists,
		getAllLists,
		deleteList,
		editList,
		addList,
		publicLists,
		allLists,
		getAllPrivate,
		userPrivateComplete,
		getAllPublic,
		userPublicComplete,
		getMovies,
		movieData,
	} = useLists();

	useEffect(() => {
		getUser(user);
		getAllLists(user);
		// getAllPrivate(user),
		// getAllPublic(user)
	}, []);

	useEffect(() => {
		getPublicLists(user);
	}, []);

	useEffect(() => {
		publicLists.public.length && setPlaylistId(publicLists.public[0]._id);
	}, [publicLists]);

	console.log(publicLists);

	useEffect(() => {
		getMovies(user, playlistId);
	}, [playlistId]);

	const editInfoHandler = {
		info: () => {
			const put = { info: newInfo, image: userData.image };
			editUser(user, put);
			setIsUpload(false);
			setIsEdit(false);
			getUser(user);
		},
		image: () => {
			const put = { info: userData.info, image: newImage };
			editUser(user, put);
			setIsUpload(false);
			setIsEdit(false);
			getUser(user);
		},
	};

	const editListHandler = (id) => {
		editList(userData.userName, id, listInfo);
		setListInfo(null);
	};

	// const listHandler = () => {
	//   console.log("click")
	// };

	useEffect(() => {
		getUser(user);
		getAllLists(user);
	}, [listInfo]);

	// console.log("public",		userPublicComplete, 		userPrivateComplete)
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
								{" "}
								{userData.userName}{" "}
							</h1>

							{isEdit ? (
								<>
									<input
										className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                mt-2
                                focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
										id="info"
										type="info"
										name="info"
										placeholder={"i am ghost type..."}
										onChange={(e) => {
											setNewInfo(e.target.value);
										}}
									/>
									<button
										className="btn-primary mt-4 mb-8"
										onClick={() => editInfoHandler.info()}
									>
										submit
									</button>
								</>
							) : (
								<>
									{userData.info ? (
										<p className="text-md font-medium text-white mt-2">
											{userData.info}
										</p>
									) : (
										<p className="text-md font-medium text-white mt-2">
											write something nice
										</p>
									)}
									<button
										className="btn-primary mt-4 mb-8"
										onClick={() => {
											setIsUpload(false);
											setIsEdit(!isEdit);
										}}
									>
										edit
									</button>
								</>
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
								apiImage
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
					<div className="flex justify-end">
						{isUpload ? (
							<>
								<input
									className="
                                form-control
                                block
                                w-lg
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
									placeholder={" paste an image url..."}
									onChange={(e) => {
										setNewImage(e.target.value);
									}}
								/>
								<button
									className="btn-primary mt-5 w-32"
									onClick={() => editInfoHandler.image()}
								>
									submit
								</button>
							</>
						) : (
							<>
								<button
									className="btn-primary mt-5 w-32"
									onClick={() => {
										setIsUpload(!isUpload);
										setIsEdit(false);
									}}
								>
									update cover
								</button>
							</>
						)}
					</div>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row">
				<div className="flex flex-col">
					<h1 className="text-2xl font-medium text-white text-left mt-8">
						playlists
					</h1>
					{/* <div>
						<h1 className="text-lg font-medium text-white mt-6 mb-3 ml-1 text-left">
							main lists
						</h1>
						<div className="flex flex-col justify-left">
							<button
								className={
									activeList !== "WatchLater"
										? "btn-primary mb-2 mr-5 w-44"
										: "btn-primary-selected mb-2 mr-5 w-44"
								}
								onClick={() => {
									setActiveList("WatchLater");
								}}
							>
								watch later
							</button>
							<button
								className={
									activeList !== "HiddenList"
										? "btn-primary mb-2 mr-5 w-44"
										: "btn-primary-selected mb-2 mr-5 w-44"
								}
								onClick={() => {
									setActiveList("HiddenList");
								}}
							>
								hidden
							</button>
						</div>
					</div> */}
					<div>
						<h1 className="text-lg font-medium text-white mt-6 mb-3 ml-1 text-left">
							public lists
						</h1>
						{userData.publicLists.length ? (
							<div className="flex flex-col justify-left">
								{allLists.public.map((list, index) => (
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
											setPlaylistId(allLists.public[index]._id);
											setIsPublic(true);
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
					<div>
						<h1 className="text-lg font-medium text-white mt-6 mb-3 ml-1  text-left">
							private lists
						</h1>
						<div className="flex flex-col justify-left">
							{userData.privateLists.length ? (
								<div className="flex flex-col justify-left">
									{allLists.private.map((list, index) => (
										<button
											className={
												activeList !== `private${index}`
													? "btn-primary mb-2 mr-5 w-44"
													: "btn-primary-selected mb-2 mr-5 w-44"
											}
											key={list._id}
											onClick={() => {
												setActiveList(`private${index}`);
												setSelectedIndex(index);
												setPlaylistId(allLists.private[index]._id);
												setIsPublic(false);
											}}
										>
											{list.name}
										</button>
									))}
								</div>
							) : (
								<p className="text-sm font-base text-white mt-3 mb-3 ml-1 text-left">
									no private lists yet
								</p>
							)}
						</div>
					</div>
				</div>

				<div className="px-8 h-[600px] pt-0 pb-8 ml-0 md:ml-6 mb-12 border-0 border-white w-full mt-0">
					<h1 className="text-2xl font-medium text-white text-left mt-8 mb-3 ">
						selected playlist
					</h1>
					{/* <p>{allLists.public[selectedIndex]?.name}</p> */}
					{publicLists.public.length ? (
						<>
							{allLists._id && (
								<div>
									<PlaylistHeader
										selectedIndex={selectedIndex}
										allLists={allLists}
										editListHandler={editListHandler}
										setListInfo={setListInfo}
										isPublic={isPublic}
									/>
									{/* <RenderList 
										listInfo={allLists.public[ 0 ]}
										listHandler={listHandler}
													/>	 */}
								</div>
							)}
						</>
					) : (
						<></>
					)}

					<ProfileList movieData={movieData} publicLists={publicLists} />
				</div>
			</div>
		</>
	);
}
