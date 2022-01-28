import amazon_empty from "../icons/amazon_empty_white.png";
import netflix_empty from "../icons/netflix_empty_white.png";
import disney_empty from "../icons/disney_empty_white.png";

export default function ServiceSelector() {
	return (
		<div
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
		>
			<button>
				<img
					className="hover:bg-rose-500 hover:bg-opacity-70 m-1 p-0.5 rounded-lg w-6 h-6"
					src={netflix_empty}
				/>
			</button>
			<button>
				<img
					className="hover:bg-blue-500 hover:bg-opacity-70 m-1 p-0.5 rounded-lg w-6 h-6"
					src={disney_empty}
				/>
			</button>
			<button>
				<img
					className="hover:bg-cyan-500 hover:bg-opacity-70 m-1 p-0.5 rounded-lg w-6 h-6"
					src={amazon_empty}
				/>
			</button>
		</div>
	);
}
