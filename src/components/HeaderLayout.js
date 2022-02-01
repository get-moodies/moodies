import { Link } from "react-router-dom";

export default function HeaderLayout() {
	return (
		<div className="flex mb-5 justify-between">
			<h1 className="text-5xl text-white font-medium">
				<Link to="/">moodies</Link>
			</h1>
			<button
				className="btn-primary
							mt-1
							ml-3
                         "
			>
				account
			</button>
		</div>
	);
}
