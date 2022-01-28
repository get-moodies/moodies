export default function Header() {
	return (
		<div className="flex mb-5 justify-between">
			<h1 className="text-5xl text-white font-medium">moodies</h1>
			<button className="shadow-lg m-1 my-2 bg-opacity-40 bg-black hover:bg-black hover:bg-opacity-60 px-4 py-2  rounded-full font-medium outline outline-offset-0 text-sm outline-0 outline-white text-white">
				account
			</button>
		</div>
	);
}
