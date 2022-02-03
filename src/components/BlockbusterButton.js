export default function BlockbusterButton({ sortQuery, setSortQuery }) {
	return (
		<>
			<button
				className={
					sortQuery !== "revenue.desc"
						? `mx-2 my-3
                                btn-primary`
						: `mx-2 my-3
                                btn-primary-selected`
				}
				onClick={() => {
					sortQuery !== "revenue.desc"
						? setSortQuery("revenue.desc")
						: setSortQuery("popularity.desc");
				}}
			>
				blockbusters
			</button>
		</>
	);
}
