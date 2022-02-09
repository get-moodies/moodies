export default function BlockbusterButton({
	sortQuery,
	setSortQuery,
	sortQuerySelected,
	setSortQuerySelected,
}) {
	return (
		<>
			<button
				className={
					sortQuerySelected !== "revenue.desc"
						? `mx-2 my-3
                                btn-primary`
						: `mx-2 my-3
                                btn-primary-selected`
				}
				/* eslint-disable no-unused-expressions */

				onClick={() => {
					sortQuery !== "revenue.desc"
						? (setSortQuery("revenue.desc"),
						  setSortQuerySelected("revenue.desc"))
						: (setSortQuery("popularity.desc"),
						  setSortQuerySelected("popularity.desc"));
				}}
			>
				blockbusters
			</button>
		</>
	);
}
