import { useState } from "react";

export default function Niche() {
	const [isStinkerSelected, setIsStinkerSelected] = useState(false);
	const [isKidsSelected, setIsKidsSelected] = useState(false);
	const [isFlopsSelected, setIsFlopsSelected] = useState(false);
	const [isBlockbustersSelected, setIsBlockbustersSelected] = useState(false);
	const [isGemsSelected, setIsGemsSelected] = useState(false);
	const [isEpicsSelected, setIsEpicsSelected] = useState(false);

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
						!isKidsSelected
							? `mx-2 my-3
                                btn-primary`
							: `mx-2 my-3
                                btn-primary-selected`
					}
					onClick={() => {
						setIsKidsSelected(!isKidsSelected);
					}}
				>
					safe for kids
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
			</div>
		</>
	);
}
