export default function EpicsButton({
	movieLength,
	setMovieLength,
	movieLengthSelected,
	setMovieLengthSelected,
}) {
	return (
		<>
			<button
				className={
					!movieLengthSelected
						? `mx-2 my-3
                                btn-primary`
						: `mx-2 my-3
                                btn-primary-selected`
				}
				/* eslint-disable no-unused-expressions */
				onClick={() => {
					movieLength === 0
						? (setMovieLength(180), setMovieLengthSelected(true))
						: (setMovieLength(0), setMovieLengthSelected(false));
				}}
			>
				sprawling epics
			</button>
		</>
	);
}
