import { useState } from "react";

export default function Niche({
	isStinkerSelected,

	isAdult,
	setIsAdult,

	isFlopsSelected,
	isGemsSelected,
	isEpicsSelected,
	isBlockbustersSelected,
	setIsStinkerSelected,

	setIsFlopsSelected,
	setIsBlockbustersSelected,
	setIsGemsSelected,
	setIsEpicsSelected,
}) {
	console.log(`isAdult on niche page is ${isAdult}`);
	return (
		<>
			<div>
				<h3 className="text-xl text-white font-medium mt-8 mb-5">
					in the mood for something more niche?
				</h3>
				<button
					className={
						!isStinkerSelected
							? `mx-2 my-3
                                btn-primary`
							: `mx-2 my-3
                                btn-primary-selected`
					}
					onClick={() => {
						setIsStinkerSelected(!isStinkerSelected);
					}}
				>
					real stinkers
				</button>
				<button
					className={
						!isEpicsSelected
							? `mx-2 my-3
                                btn-primary`
							: `mx-2 my-3
                                btn-primary-selected`
					}
					onClick={() => {
						setIsEpicsSelected(!isEpicsSelected);
					}}
				>
					sprawling epics
				</button>
				<button
					className={
						!isFlopsSelected
							? `mx-2 my-3
                                btn-primary`
							: `mx-2 my-3
                                btn-primary-selected`
					}
					onClick={() => {
						setIsFlopsSelected(!isFlopsSelected);
					}}
				>
					massive flops
				</button>
				<button
					className={
						!isBlockbustersSelected
							? `mx-2 my-3
                                btn-primary`
							: `mx-2 my-3
                                btn-primary-selected`
					}
					onClick={() => {
						setIsBlockbustersSelected(!isBlockbustersSelected);
					}}
				>
					blockbusters
				</button>
				<button
					className={
						!isGemsSelected
							? `mx-2 my-3
                                btn-primary`
							: `mx-2 my-3
                                btn-primary-selected`
					}
					onClick={() => {
						setIsGemsSelected(!isGemsSelected);
					}}
				>
					forgotten gems
				</button>

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
				>
					remove child lock
				</button>
			</div>
		</>
	);
}
