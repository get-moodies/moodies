import Icon from "./Icon";
import Option from "./Option";
import Bubble from "./Bubble";
import StinkersButton from "./StinkersButton";
import GemsButton from "./GemsButton";
import FlopsButton from "./FlopsButton";
import BlockbusterButton from "./BlockbusterButton";
import EpicsButton from "./EpicsButton";
import AdultButton from "./AdultButton";

export default function SelectionBox({
	genre,
	startYear,
	endYear,
	generes,
	genresIcons,
	handler,
	age,
	ageSelected,
	sortQuery,
	isAdult,
	movieLength,
}) {
	return (
		<>
			<p className="text-xl text-white font-medium mb-5 mt-8 ">current mood</p>
			<div className="border-4 border-slate-50 overflow-hidden rounded-xl w-3/5 mx-auto p-4 mt-5 sticky h-[300px]">
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

				<div className="flex flex-row items-center justify-center ">
					{sortQuery === "vote_average.asc" && <StinkersButton />}
					{sortQuery === "popularity.asc" && <GemsButton />}
					{sortQuery === "revenue.asc" && <FlopsButton />}
					{sortQuery === "revenue.desc" && <BlockbusterButton />}
					{isAdult && <AdultButton />}
					{movieLength === 180 && <EpicsButton />}
				</div>
				{/* <p className="text-lg text-white font-medium mt-1">
					{startYear} - {endYear}
				</p> */}
			</div>
		</>
	);
}
