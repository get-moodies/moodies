export default function GemsButton({ sortQuery, setSortQuery }) {
	return (
		<>
			<button
				className={
					sortQuery !== "popularity.asc"
						? `mx-2 my-3
                            btn-primary`
						: `mx-2 my-3
                            btn-primary-selected`
				}
				onClick={() => {
					sortQuery !== "popularity.asc"
						? setSortQuery("popularity.asc")
						: setSortQuery("popularity.desc");
				}}
			>
				forgotten gems
			</button>
		</>
	);
}
