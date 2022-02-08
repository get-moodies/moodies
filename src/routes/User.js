import { useState, useEffect } from "react";
import face from "../images/face.png";
import { useParams } from "react-router-dom";
import useUsers from "../components/useUsers";
import useLists from "../components/useLists";
import WatchLater from "../components/WatchLater";
import HiddenList from "../components/HiddenList";
import PrivateList from "../components/PrivateList";
import PublicList from "../components/PublicList";

export default function User() {
	const [activeList, setActiveList] = useState("WatchLater");
	const [isEdit, setIsEdit] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState();

	const { user } = useParams();
	const { getUser, userData } = useUsers();
	const {
		getPublicLists,
		getAllLists,
		deleteList,
		editList,
		addList,
		publicLists,
		allLists,
	} = useLists();

	useEffect(() => {
		getUser(user);
	}, []);

	useEffect(() => {
		getAllLists(user);
	}, []);

	console.log(allLists);

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
							/>
							<button
								className="btn-primary mt-4 mb-8"
								onClick={() => setIsEdit(!isEdit)}
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
								onClick={() => setIsEdit(!isEdit)}
							>
								edit
							</button>
						</>
					)}
				</div>
			</div>
			<div className="flex flex-col sm:flex-row">
				<div className="flex flex-col">
					<h1 className="text-2xl font-medium text-white text-left mt-8">
						playlists
					</h1>
					<div>
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
					</div>
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

				<div className="px-8 h-[600px] pt-0 pb-8 ml-0 md:ml-6 mb-4 border-0 border-white w-full mt-0">
					<h1 className="text-2xl font-medium text-white text-left mt-8 mb-3 ">
						selected playlist
					</h1>

					{(() => {
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
					})()}
				</div>
			</div>
		</>
	);
}
