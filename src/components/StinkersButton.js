export default function StinkersButton({ sortQuery, setSortQuery }) {
	return (
		<>
			<button
				className={
					sortQuery !== "vote_average.asc"
						? `mx-2 my-3
                                btn-primary`
						: `mx-2 my-3
                                btn-primary-selected`
				}
				onClick={() => {
					sortQuery !== "vote_average.asc"
						? setSortQuery("vote_average.asc")
						: setSortQuery("popularity.desc");
				}}
			>
				real stinkers
			</button>
		</>
	);
}
