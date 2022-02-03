import Icon from "./Icon";
import Option from "./Option";
import Bubble from "./Bubble";

export default function SelectionBox({
	genre,
	startYear,
	endYear,
	generes,
	genresIcons,
	handler,
	age,
	ageSelected,
}) {
	return (
		<>
			<p className="text-xl text-white font-medium mb-3 mt-7 ">current mood</p>
			<div className="border-4 border-slate-50 overflow-hidden rounded-xl w-3/5 mx-auto p-4 mt-5 sticky h-[350px]">
				<div className="flex  items-center justify-center ">
					{genresIcons.map((category, index) => {
						return (
							genre[index] && (
								<Icon
									element={category}
									key={category.name}
									handler={handler.genre}
									index={index}
								/>
							)
						);
					})}
					{generes.map((category, index) => {
						return (
							index > 9 &&
							genre[index] && (
								<Option
									element={category}
									isSelected={false}
									key={category.name}
									handler={handler.genre}
									index={index}
								/>
							)
						);
					})}
				</div>
				<div className="flex flex-col items-center justify-center ">
					{age.map(
						(element, index) =>
							ageSelected[index] && (
								<Bubble
									key={element.id}
									element={element}
									index={index}
									handler={handler.year}
									isSelected={!ageSelected[index]}
								/>
							)
					)}
				</div>

				{/* <p className="text-lg text-white font-medium mt-1">
					{startYear} - {endYear}
				</p> */}
			</div>
		</>
	);
}
