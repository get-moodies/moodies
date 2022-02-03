export default function AdultButton({ isAdult, setIsAdult }) {
	return (
		<>
			<button
				className={
					!isAdult
						? `mx-2 my-3
                                btn-primary`
						: `mx-2 my-3
                                btn-primary-selected`
				}
				onClick={() => {
					setIsAdult(!isAdult);
				}}
				data-bs-toggle="tooltip"
				data-bs-placement="right"
				title="By default this app does not include steamy content in its results."
			>
				remove child lock
			</button>
		</>
	);
}
