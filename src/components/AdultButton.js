export default function AdultButton({
	isAdult,
	setIsAdult,
	isAdultSelected,
	setIsAdultSelected,
}) {
	return (
		<>
			<button
				className={
					!isAdultSelected
						? `mx-2 my-3
                                btn-primary`
						: `mx-2 my-3
                                btn-primary-selected`
				}
				/* eslint-disable no-unused-expressions */
				onClick={() => {
					isAdult
						? (setIsAdult(false), setIsAdultSelected(false))
						: (setIsAdult(true), setIsAdultSelected(true));
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
