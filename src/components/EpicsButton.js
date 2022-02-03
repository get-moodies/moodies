export default function EpicsButton({ movieLength, setMovieLength }) {
	return (
		<>
			<button
				className={
					movieLength === 0
						? `mx-2 my-3
                                btn-primary`
						: `mx-2 my-3
                                btn-primary-selected`
				}
				onClick={() => {
					movieLength === 0 ? setMovieLength(180) : setMovieLength(0);
				}}
			>
				sprawling epics
			</button>
		</>
	);
}
