import face from "../images/face.png";

export default function Error() {
	return (
		<>
			<div className="w-full">
				<img
					src={face}
					className="Load-spinner mx-auto mt-12 h-40"
					alt="cage face"
				/>
				<p className="mx-auto font-medium mt-9 text-xl text-center text-white">
					error, try again!
				</p>
			</div>
		</>
	);
}
