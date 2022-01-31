import { Box, Button, Typography, Modal, Fade } from "@mui/material";
import { useState } from "react";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "60%",
	height: "80%",
	bgcolor: "background.paper",
	border: "2px solid #fff",
	boxShadow: 24,
	p: 4,
};

export default function Trailer({ title }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const trailerQuery = title.replace("'", "").split(" ").join("-");
	const trailerUrl = `https://www.traileraddict.com/${trailerQuery}/trailer`;
	return (
		<>
			<button
				onClick={handleOpen}
				className="-mb-10 w-20 hidden md:inline mt-3 mr-2 bg-opacity-40 bg-white hover:bg-white hover:bg-opacity-60 px-4 py-2 rounded-full font-medium text-sm outline outline-offset-0 outline-0 outline-white text-slate-900"
			>
				trailer
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Fade in={open} timeout={500}>
					<Box sx={style}>
						<iframe
							class="responsive-iframe"
							src={trailerUrl}
							title="movie trailer"
							frameborder="0"
							//allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
							width="100%"
							height="100%"
							key={trailerUrl}
						></iframe>
					</Box>
				</Fade>
			</Modal>
		</>
	);
}
