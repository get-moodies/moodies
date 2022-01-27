import amazon_empty from "../icons/amazon_empty_white.png";
import netflix_empty from "../icons/netflix_empty_white.png";
import disney_empty from "../icons/disney_empty_white.png";

export default function ServiceSelector() {
	return (
		<div className="flex justify-center bg-black bg-opacity-20 w-max mx-auto py-2 px-4 rounded-full outline outline-offset-0 outline-1 outline-white">
			<button>
				<img
					className="hover:bg-rose-500 hover:bg-opacity-70 m-1 p-0.5 rounded-lg w-9 h-9"
					src={netflix_empty}
				/>
			</button>
			<button>
				<img
					className="hover:bg-blue-500 hover:bg-opacity-70 m-1 p-0.5 rounded-lg w-9 h-9"
					src={disney_empty}
				/>
			</button>
			<button>
				<img
					className="hover:bg-cyan-500 hover:bg-opacity-70 m-1 p-0.5 rounded-lg w-9 h-9"
					src={amazon_empty}
				/>
			</button>
		</div>
	);
}
