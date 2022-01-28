import Dropdown from "./RegionDropdown";


export default function Header({region,handler}) {
		
	return (
		<div className="flex mb-5 justify-between">
			<h1 className="text-5xl text-white font-medium">moodies</h1>
			<Dropdown region={region} handler={handler}/>
			<button className="h-[3em] shadow-lg m-1 my-2 bg-opacity-40 bg-black hover:bg-black hover:bg-opacity-60 px-4 py-2  rounded-full font-medium outline outline-offset-0 text-sm outline-0 outline-white text-white">
				account
			</button>
		</div>
	);
}
