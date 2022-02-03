export default function FlopsButton({ sortQuery, setSortQuery }) {
	return (
		<>
			<button
				className={
					sortQuery !== "revenue.asc"
						? `mx-2 my-3
                                btn-primary`
						: `mx-2 my-3
                                btn-primary-selected`
				}
				onClick={() => {
					sortQuery !== "revenue.asc"
						? setSortQuery("revenue.asc")
						: setSortQuery("popularity.desc");
				}}
			>
				massive flops
			</button>
		</>
	);
}
