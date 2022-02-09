import { Box, Modal, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import RegisterLoginLayout from "../components/RegisterLoginLayout";

import { useAuth } from "./ContextProvider";
import useLists from "../components/useLists";
import AddPlaylist from "../components/AddPlaylist"

const style = {
	position: "absolute",
	top: "36%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "300px",
	height: "40%",
	bgcolor: "rgba(0, 0, 0, 0)",
	textAlign: "center",
};

export default function SaveButton({ movieId, movieInfo }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {setOpen(false)
		setIsNewPlaylistActive(false)
	};
	const [selectedList, setSelectedList] = useState(null);
	const [isNewPlaylistActive, setIsNewPlaylistActive] = useState(false)

	const { currentUserName, getUserName } = useAuth();
	const { getAllLists, allLists, editList, addMovie } = useLists();
	const userNameNow = JSON.parse(localStorage.getItem("userName"));

	//	console.log(movieInfo);

	useEffect(() => {
		if (userNameNow) {
			getAllLists(userNameNow);
		}
	}, []);

	const submitHandler = () => {
		const newObject = [...allLists.private, ...allLists.public][selectedList];
		const updatedMovies = [...newObject.movies, movieId.toString()];

		const put = { ...newObject, movies: updatedMovies };
		editList(userNameNow, put._id, put);

		const putMovie = { movie_id: movieInfo.id, movie: movieInfo };
		addMovie(putMovie);

		setOpen(false);
		// console.log(userNameNow, put._id , put )
		// console.log("movie Info", movieInfo.id, movieId);
	};

	const putMovie = { movie_id: movieInfo.id, movie: movieInfo };

	// console.log(isNewPlaylistActive)
	return (
		<>
			<button
				className="-mb-10 w-20 mt-3 mr-2 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900"
				onClick={handleOpen}
			>
				save
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Fade in={open} timeout={500}>
					<Box sx={style}>
						<div className="max-w-xs ">
							<div className="bg-black shadow-lg rounded-xl px-8 pt-2 pb-8 bg-opacity-80">
								<div className="text-xl text-white font-medium m-5">
									add to playlist
								</div>
								<div className="mb-4">
									<label
										className="block text-white text-sm font-base mb-2"
										htmlFor="username"
									>
										choose existing
									</label>

									<select
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
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
										name="color"
										onChange={(e) => {
											setSelectedList(e.target.value);
										}}
									>

										{/* below code was causing an error */}
										<option >choose a playlist</option>
										{[...allLists.private, ...allLists.public]?.map(
											(playlist, index) => {
												return (
													<option key={index} value={index}>
														{playlist.name}
													</option>
												);
											}
										)}
									</select>
								</div>

								<div className="mb-8">
									<label
										className="block text-white text-sm font-base mb-2"
										htmlFor="password"
									>
									or...
									</label>
									<button
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
											m-0
											focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
										// id="playlist name..."
										// name="playlist name..."
										// placeholder="playlist name..."
									onClick={() => { setIsNewPlaylistActive(! isNewPlaylistActive) } }
									>
									Create new Playlist
									</button>	
									<div className={isNewPlaylistActive ?"text-white" : "hidden"  }>
										<AddPlaylist 
											handleClose = {handleClose}
											user={userNameNow}
											movieId={movieId}
											putMovie={putMovie}
										/>
									</div>
								</div>
								<div className="flex justify-center">
									<button
										className="
                            mr-2 bg-gray-400 hover:bg-gray-300  px-4 py-2 rounded-full font-medium text-sm  text-slate-900"
										type="button"
										onClick={() => submitHandler()}
									>
										submit
									</button>
								</div>
							</div>
						</div>
					</Box>
				</Fade>
			</Modal>
		</>
	);
}
