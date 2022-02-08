import StinkersButton from "./StinkersButton";
import GemsButton from "./GemsButton";
import FlopsButton from "./FlopsButton";
import BlockbusterButton from "./BlockbusterButton";
import EpicsButton from "./EpicsButton";
import AdultButton from "./AdultButton";

export default function Niche({
	isAdult,
	setIsAdult,
	movieLength,
	setMovieLength,
	sortQuery,
	setSortQuery,
	sortQuerySelected,
	setSortQuerySelected,
	isAdultSelected,
	setIsAdultSelected,
	movieLengthSelected,
	setMovieLengthSelected,
}) {
	return (
		<>
			<div>
				<h3 className="text-xl text-white font-medium mb-5 mt-6">
					in the mood for something more niche?
				</h3>

				<StinkersButton
					sortQuery={sortQuery}
					setSortQuery={setSortQuery}
					sortQuerySelected={sortQuerySelected}
					setSortQuerySelected={setSortQuerySelected}
				/>
				<GemsButton
					sortQuery={sortQuery}
					setSortQuery={setSortQuery}
					sortQuerySelected={sortQuerySelected}
					setSortQuerySelected={setSortQuerySelected}
				/>
				<FlopsButton
					sortQuery={sortQuery}
					setSortQuery={setSortQuery}
					sortQuerySelected={sortQuerySelected}
					setSortQuerySelected={setSortQuerySelected}
				/>
				<BlockbusterButton
					sortQuery={sortQuery}
					setSortQuery={setSortQuery}
					sortQuerySelected={sortQuerySelected}
					setSortQuerySelected={setSortQuerySelected}
				/>
				<EpicsButton
					movieLength={movieLength}
					setMovieLength={setMovieLength}
					movieLengthSelected={movieLengthSelected}
					setMovieLengthSelected={setMovieLengthSelected}
				/>
				<AdultButton
					isAdult={isAdult}
					setIsAdult={setIsAdult}
					isAdultSelected={isAdultSelected}
					setIsAdultSelected={setIsAdultSelected}
				/>
			</div>
		</>
	);
}
