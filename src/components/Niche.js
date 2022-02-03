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
}) {
	return (
		<>
			<div>
				<h3 className="text-xl text-white font-medium mt-8 mb-5">
					in the mood for something more niche?
				</h3>

				<StinkersButton sortQuery={sortQuery} setSortQuery={setSortQuery} />
				<GemsButton sortQuery={sortQuery} setSortQuery={setSortQuery} />
				<FlopsButton sortQuery={sortQuery} setSortQuery={setSortQuery} />
				<BlockbusterButton sortQuery={sortQuery} setSortQuery={setSortQuery} />
				<EpicsButton
					movieLength={movieLength}
					setMovieLength={setMovieLength}
				/>
				<AdultButton isAdult={isAdult} setIsAdult={setIsAdult} />
			</div>
		</>
	);
}
