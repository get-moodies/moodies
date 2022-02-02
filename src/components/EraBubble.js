import useBubbles from "./useBubbles";
import "../index.css";

export default function EraBubble({ element, index, handler, isSelected }) {
	// const bubblePosition = useBubbles();
	// const CSSVar = bubblePosition();
	const RandomNum = (start, end) => {
		return Math.random() * (end - start) + start;
	};
	const size = RandomNum(8, 10);
	const sizeString = size + "rem";
	const borderRadius = size / 2 + "rem";
	const pl = RandomNum(-1, 1);
	const pt = RandomNum(-1, 1);

	return (
		<>
			<div className="group">
				<div
					className={
						!isSelected
							? `bg-black m-4 relative group-hover:cursor-pointer group-hover:scale-110 transition-all duration-500 overflow-hidden shadow-lg group-hover:shadow-xl`
							: "bg-black m-4 relative group-hover:cursor-pointer scale-110 transition-all duration-500 overflow-hidden shadow-xl outline-4 outline-slate-400/40  outline outline-offset-0"
					}
					style={{
						width: sizeString,
						height: sizeString,
						borderRadius: borderRadius,
						lineHeight: sizeString,
						marginLeft: pl + "rem",
						marginTop: pt + "rem",
					}}
				>
					<div
						className={
							!isSelected
								? `absolute overflow-hidden group-hover:opacity-30 group-hover:blur-sm group-hover:scale-110 transition-all duration-500 text-justify`
								: `absolute overflow-hidden opacity-30 blur-sm scale-110 transition-all duration-500 text-justify`
						}
						style={{
							width: sizeString,
							height: sizeString,
							borderRadius: borderRadius,
							backgroundImage: `url(${element.bubble})`,
							backgroundSize: "cover",
							overflow: "hidden",
						}}
						onClick={() => handler(index, "era")}
					>
						{" "}
					</div>
					<div
						className={
							!isSelected
								? ` text-white p-4 opacity-0  text-base mx-auto font-medium group-hover:opacity-100 right-0 top-0 inline-block align-middle transition-all duration-500 `
								: ` text-white p-4  text-base mx-auto font-medium opacity-100 right-0 top-0 inline-block align-middle transition-all duration-500  `
						}
						style={{
							width: sizeString,
							//	height: sizeString,

							//	display: "inline-block",
							//	verticalAlign: "middle",
							//	borderRadius: borderRadius,
						}}
						onClick={() => handler(index, "era")}
					>
						<span> {element.name}</span>
					</div>
				</div>
			</div>
		</>
	);
}
