export default function StinkersButton({
	sortQuery,
	setSortQuery,
	sortQuerySelected,
	setSortQuerySelected,
}) {
	return (
		<>
			<button
				className={
					sortQuerySelected !== "vote_average.asc"
						? `mx-2 my-3
                                btn-primary`
						: `mx-2 my-3
                                btn-primary-selected`
				}
				/* eslint-disable no-unused-expressions */

				onClick={() => {
					sortQuery !== "vote_average.asc"
						? (setSortQuery("vote_average.asc"),
						  setSortQuerySelected("vote_average.asc"))
						: (setSortQuery("popularity.desc"),
						  setSortQuerySelected("popularity.desc"));
				}}
			>
				real stinkers
			</button>
		</>
	);
}
