export default function GemsButton({
	sortQuery,
	setSortQuery,
	sortQuerySelected,
	setSortQuerySelected,
}) {
	return (
		<>
			<button
				className={
					sortQuerySelected !== "popularity.asc"
						? `mx-2 my-3
                            btn-primary`
						: `mx-2 my-3
                            btn-primary-selected`
				}
				/* eslint-disable no-unused-expressions */

				onClick={() => {
					sortQuery !== "popularity.asc"
						? (setSortQuery("popularity.asc"),
						  setSortQuerySelected("popularity.asc"))
						: (setSortQuery("popularity.desc"),
						  setSortQuerySelected("popularity.desc"));
				}}
			>
				forgotten gems
			</button>
		</>
	);
}
