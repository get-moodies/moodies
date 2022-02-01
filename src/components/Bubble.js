import useBubbles from "./useBubbles";

export default function Bubble({ element, index, handler,isSelected }) {

	// const bubblePosition = useBubbles();
	// const CSSVar = bubblePosition(index);
	const RandomNum = (start, end) => {
        return (Math.random() * (end-start) + start)
    };
	// const size = RandomNum(4,9)
	// const sizeString = size + "rem"
	// const borderRadius = size/2 + "rem"
	// const pl = RandomNum(-2,2)
	// const pt = RandomNum(-2,2)
	return (
			
			<div className={ !isSelected ? `
					py-2 m-2
					text-white font-bold
					opacity-100  
					rounded-lg
					hover:bg-slate-900
					hover:bg-opacity-60	
					hover:scale-105 
					hover:shadow-xl
					hover:text-white
					transition-all duration-300 
					w-8/12
					items-center justify-center` : `
					py-2 m-1
					text-black font-bold
					opacity-100   
					rounded-lg
					bg-slate-900
					bg-opacity-100	
					scale-200
					shadow-xl
					transition-all duration-300 
					w-10/12
					items-center justify-center
					`
				}
				style={{ 	
					"backgroundImage":`url(${element.image})`,
					"backgroundSize": "cover",
				}}  
				onClick={() => handler(index, "era")}
			>
				{element.name}
			</div>
		
	);
}

// // style={{ 
// // 	// "width":sizeString,
// // 	// "height":sizeString,
// // 	// "borderRadius":borderRadius,
// // 	"marginLeft":pl + "rem",
// // 	"marginTop":pt + "rem",
// // 	"backgroundImage":`url(${element.image})`,
// // 	"backgroundSize": "cover",
// // 	// ":hover": {
// // 	// 	"opacity": 0,
// // 	// }
// // }}  


// {/* <div
// 				// border-4 border-lime-600 rounded-3xl
// 				className={
// 				`bubbles 
// 				absolute h-40 w-40 rounded-[5rem]
// 				pt-[3.4em] px-auto 
// 				border-2 border-white
// 				text-white font-medium  
// 				opacity-0  
// 				z-10 
// 				hover:bg-slate-600
// 				hover:opacity-100
// 				hover:bg-opacity-50	
// 				hover:scale-105 
// 				hover:shadow-xl
// 				transition-all duration-300 
// 				shadow-lg `
// 				}
// 				style={CSSVar}
// 				onClick={() => handler(index, "era")}
// 			>
// 				{element.name}
// 			</div>
// 			<img
// 				src={element.image}
// 				alt="bubble image"
// 				// border-4 border-lime-600 rounded-3xl
// 				className="bubbles absolute  h-40 w-40 object-contain hover:h-24 z-0 border-2 border-white hover:scale-105 "
// 				style={CSSVar}
// 			/> */}


// 			// className={!isSelected ?  `
// 			// 		icon
// 			// 		text-[rgb(0,0,0,0)] font-bold
// 			// 		opacity-100  
// 			// 		z-10 
// 			// 		hover:bg-slate-900
// 			// 		hover:bg-opacity-90	
// 			// 		hover:scale-105 
// 			// 		hover:shadow-xl
// 			// 		hover:text-[#12bbb8]
// 			// 		transition-all duration-300 
// 			// 		flex items-center justify-center
					
// 			// 	`:
// 			// 	`icon
// 			// 	text-[#12bbb8] font-bold

// 			// 	opacity-100  
// 			// 	z-10 
// 			// 	bg-slate-900
// 			// 	bg-opacity-80	
// 			// 	scale-105 
// 			// 	shadow-xl
// 			// 	transition-all duration-300 
// 			// 	flex items-center justify-center`
// 			// }


