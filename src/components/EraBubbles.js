import EraBubble from "./EraBubble";

export default function EraBubbles({ category, handler, ageSelected }) {
	return (
		<div className={` flex items-center justify-center mt-4 mb-6 `}>
			<div
				className={`
              m-4
              grid grid-cols-5 gap-x-4 gap-y-4
              place-items-center
            `}
			>
				{category.map((element, index) => (
					<EraBubble
						key={element.id}
						element={element}
						index={index}
						handler={handler}
						isSelected={ageSelected[index]}
					/>
				))}
			</div>
		</div>
	);
}
