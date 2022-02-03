import { Link } from "react-router-dom";

export default function HeaderLayout() {
	return (
		<div className="flex mb-5 justify-between">
			<h1 className="text-4xl sm:text-5xl mt-2 sm:mt-0 text-white font-medium">
				<Link to="/">moodies</Link>
			</h1>
			<button
				className="btn-primary
							mt-1
							ml-3
							hidden sm:inline-block 
                         "
			>
				account
			</button>
		</div>
	);
}
