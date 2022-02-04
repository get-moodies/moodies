import amazon_empty from "../icons/amazon_empty_white.png";
import netflix_empty from "../icons/netflix_empty_white.png";
import disney_empty from "../icons/disney_empty_white.png";

export default function ServiceSelector({ watchProvider, selectionHandler }) {
	return (
		<div
			className="shadow-lg 
                        flex 
                        justify-center 
                        align-center
                        bg-black bg-opacity-40 
                        w-max 
                        h-10
						mx-auto
						my-0
                        sm:my-9
                         px-4 
                        rounded-full"
		>
			<button onClick={() => selectionHandler(0)}>
				<img
					className={
						watchProvider[0]
							? "bg-rose-500 bg-opacity-70  m-1 p-0.5 rounded-lg w-6 h-6"
							: "hover:bg-rose-500 hover:bg-opacity-70 m-1 p-0.5 rounded-lg w-6 h-6"
					}
					src={netflix_empty}
					alt="netflix icon"
				/>
			</button>
			<button onClick={() => selectionHandler(1)}>
				<img
					className={
						watchProvider[1]
							? "bg-blue-500 bg-opacity-70 m-1 p-0.5 rounded-lg w-6 h-6"
							: "hover:bg-blue-500 hover:bg-opacity-70 m-1 p-0.5 rounded-lg w-6 h-6"
					}
					src={disney_empty}
					alt="disney plus icon"
				/>
			</button>
			<button onClick={() => selectionHandler(2)}>
				<img
					className={
						watchProvider[2]
							? "bg-cyan-500 bg-opacity-70 m-1 p-0.5 rounded-lg w-6 h-6"
							: "hover:bg-cyan-500 hover:bg-opacity-70 m-1 p-0.5 rounded-lg w-6 h-6"
					}
					src={amazon_empty}
					alt="amazon prime video icon"
				/>
			</button>
		</div>
	);
}

// header className

{
	/* <div
			className="shadow-lg 
                        flex 
                        justify-center 
                        align-center
                        bg-black bg-opacity-40 
                        w-max 
                        h-10
                        mx-auto mt-1
                         px-4 
                        rounded-full"
		></div> */
}
