import Dropdown from "./RegionDropdown";
import RegisterLoginLayout from "../components/RegisterLoginLayout";
import { Box, Modal, Fade } from "@mui/material";
import { useState } from "react";

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
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className="flex mb-5 justify-between">
			<h1 className="text-4xl sm:text-5xl mt-2 sm:mt-0 text-white font-medium">
				moodies
			</h1>
			<div className="flex ">
				<Dropdown region={region} regionHandler={regionHandler} />

				<button
					className="btn-primary
							mt-1
							ml-0
							
                        "
					onClick={handleOpen}
				>
					account
				</button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Fade in={open} timeout={500}>
						<Box sx={style}>
							<RegisterLoginLayout />
						</Box>
					</Fade>
				</Modal>
			</div>
		</div>
	);
}
