import face from "../images/face.png";

export default function Error() {
	return (
		<>
			<div className="App-main p-12">
				<img
					src={face}
					className="Load-spinner mx-auto mt-0 h-40"
					alt="cage face"
				/>
				<p className="mx-auto font-medium mt-9 text-xl text-center text-white">
					page does not exist
				</p>
				<div className="backGround"></div>
			</div>
		</>
	);
}
