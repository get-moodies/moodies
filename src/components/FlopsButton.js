export default function FlopsButton({
	sortQuery,
	setSortQuery,
	sortQuerySelected,
	setSortQuerySelected,
}) {
	return (
		<>
			<button
				className={
					sortQuerySelected !== "revenue.asc"
						? `mx-2 my-3
                                btn-primary`
						: `mx-2 my-3
                                btn-primary-selected`
				}
				/* eslint-disable no-unused-expressions */

				onClick={() => {
					sortQuery !== "revenue.asc"
						? (setSortQuery("revenue.asc"), setSortQuerySelected("revenue.asc"))
						: (setSortQuery("popularity.desc"),
						  setSortQuerySelected("popularity.desc"));
				}}
			>
				massive flops
			</button>
		</>
	);
}
