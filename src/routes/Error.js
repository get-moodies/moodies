import face from "../images/face.png";

export default function Error() {
	return (
		<>
			<div className="w-full">
				<img src={face} className="Load-spinner mx-auto h-40" alt="cage face" />
				<p className="mx-auto font-medium mt-3 text-center text-black">
					error, try again!
				</p>
			</div>
		</>
	);
}
