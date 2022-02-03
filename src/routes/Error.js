import face from "../images/face.png";

export default function Error() {
	return (
		<>
			<img src={face} className="Load-spinner  my-auto h-40" alt="cage face" />
			<div className="mx-auto font-medium mt-3 text-white">
				error, try again!
			</div>
		</>
	);
}
