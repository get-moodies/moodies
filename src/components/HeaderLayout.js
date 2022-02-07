import { Box, Modal, Fade } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Dropdown from "./RegionDropdown";
import RegisterLoginLayout from "./RegisterLoginLayout";
import { useAuth } from "./ContextProvider";


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

export default function Header({ region, regionHandler }) {
	const [isOpen, setIsOpen] = useState(false);
	const {isLoggedIn} = useAuth()
	
	useEffect( () => {
			if (isLoggedIn()) setIsOpen(false)}
			,[isLoggedIn])

	return (
		<div className="flex mb-5 justify-between">
			<h1 className="text-4xl sm:text-5xl mt-2 sm:mt-0 text-white font-medium">
				<Link to="/">moodies</Link>
			</h1>
			<div className="flex ">
				{/* <Dropdown region={region} regionHandler={regionHandler} /> */}

				<button
					className="btn-primary
							mt-1
							ml-0
							
                        "
					onClick={()=>setIsOpen(!isOpen)}
				>
					account
				</button>
				<Modal
					open={isOpen}
					onClose={()=>setIsOpen(!isOpen)}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Fade in={isOpen} timeout={500}>
						<Box sx={style}>
							<RegisterLoginLayout />
						</Box>
					</Fade>
				</Modal>
			</div>
		</div>
	);
}
