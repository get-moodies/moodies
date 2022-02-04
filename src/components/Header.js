import ServiceSelector from "./ServiceSelector";
import Dropdown from "./RegionDropdown";

export default function Header({
	watchProvider,
	selectionHandler,
	region,
	regionHandler,
}) {
	return (
		<div className="flex mb-5 justify-between">
			<h1 className="text-4xl sm:text-5xl mt-2 sm:mt-0 text-white font-medium">
				moodies
			</h1>
			<div className="flex ">
				<Dropdown region={region} regionHandler={regionHandler} />
				{/* <ServiceSelector
					watchProvider={watchProvider}
					selectionHandler={selectionHandler}
				/> */}
				<button
					className="btn-primary
							mt-1
							ml-0
							
                        "
				>
					account
				</button>
			</div>
		</div>
	);
}
