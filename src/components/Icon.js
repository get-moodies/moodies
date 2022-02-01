import useBubbles from "./useBubbles";
import "../index.css";

export default function Icon({ element, index, handler, isSelected }) {
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
							backgroundImage: `url(${element.image})`,
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
						<span> {element.mood}</span>
					</div>
				</div>
			</div>
		</>
	);
}

// less old preview

{
	/* <div
				className={
					!isSelected
						? `
					icon
					text-[rgb(0,0,0,0)] font-bold
					opacity-100  
					z-10 
					hover:bg-slate-900
					hover:bg-opacity-90	
					hover:scale-105 
					hover:shadow-xl
					hover:text-[#12bbb8]
					transition-all duration-700 
					flex items-center justify-center
					
					
				`
						: `icon
				text-[#12bbb8] font-bold
				opacity-100  
				z-10 
				bg-slate-900
				bg-opacity-80	
				scale-105 
				shadow-xl
				transition-all duration-700 
				flex items-center justify-center`
				}
				style={{
					width: sizeString,
					height: sizeString,
					borderRadius: borderRadius,
					marginLeft: pl + "rem",
					marginTop: pt + "rem",
					backgroundImage: `url(${element.image})`,
					backgroundSize: "cover",
					// ":hover": {
					// 	"opacity": 0,
					// }
				}}
				onClick={() => handler(index, "era")}
			>
				{element.name}
			</div> */
}

// ///// Old preview
// <>
//   {/* <div className='w-20 h-20' style={{background:`  url(${element.image})`, backgroundSize:'contain',borderRadius: '5rem'}} >

//   <p className='text-white' > {element.name} </p>
//   </div> */}
//   {/* <img
//   src={element.image}
//   alt="bubble image"
//   // border-4 border-lime-600 rounded-3xl
//   className="bubbles absolute  h-20  hover:h-24 "
//   style={CSSVar}
//   onClick={()=>handler(index)}
//   /> */}
//   <img
//   src={element.image}
//   alt="bubble image"
//   // border-4 border-lime-600 rounded-3xl
//   className="icons absolute h-[5.5rem] w-[5.5rem] object-cover rounded-[5.5rem] hover:scale-105 transition-all duration-300 shadow-xl border-1 hover:shadow-xl"
//   style={CSSVar}
//   onClick={()=>handler(index)}
//   />
//    {/* hover:h-24  */}

//   </>

///Use this for options buttons

// <div
// 			// border-4 border-lime-600 rounded-3xl
// 			className={
// 			`bubbles
// 			absolute h-20 w-20
// 			pt-[1.7em] px-auto
// 			border-2 border-white
// 			text-white font-medium
// 			opacity-0
// 			z-10
// 			hover:bg-slate-600
// 			hover:opacity-100
// 			hover:bg-opacity-50
// 			hover:scale-105
// 			hover:shadow-xl
// 			transition-all duration-300
// 			shadow-lg `
// 			}
// 			style={CSSVar}
// 			onClick={() => handler(index, "era")}
// 		>
// 			{element.name}
// 		</div>
