import ServiceSelector from "./ServiceSelector";
import Dropdown from "./RegionDropdown";

export default function Header({ watchProvider, selectionHandler,region,regionHandler }) {
	return (
		<div className="flex mb-5 justify-between">
			<h1 className="text-5xl text-white font-medium">moodies</h1>
			<div className="flex ">
				<Dropdown region={region} regionHandler={regionHandler}/>
				<ServiceSelector watchProvider={watchProvider} selectionHandler={selectionHandler} />
				<button
					className="shadow-lg 
                            h-10
							mt-1
							ml-3
                            bg-opacity-40 bg-black 
                            hover:bg-black hover:bg-opacity-60 
                            px-4 py-2 
                            rounded-full 
                            font-medium text-sm text-white"
				>
					account
				</button>
			</div>
		</div>
	);
}
