import { regions } from "../data";
import { Menu } from "@headlessui/react";

export default function Dropdown({ region, regionHandler }) {
	return (
		<>
			<Menu>
				<Menu.Button
					className="
                h-[3em] 
                shadow-lg 
                m-1 my-2 px-4 py-2
                bg-opacity-40 
                bg-black 
                hover:bg-black hover:bg-opacity-60   
                rounded-full 
                font-medium 
                text-sm 
                outline-0 
                text-white"
				>
					{region}
				</Menu.Button>
				<Menu.Items
					className=" 
						shadow-lg 
						m-1 my-2 px-4 py-2  
						bg-opacity-40 
						bg-black 
						hover:bg-black hover:bg-opacity-60 
						rounded-full 
						font-medium 
						text-sm 
						outline-0 
						text-white
						absolute
						left-[65%]
						z-20
						"
				>
					{regions.map((region) => {
						return (
							<Menu.Item key={region.isoCode}>
								<p
									className="text-white px-2 py-2  "
									onClick={() => regionHandler(region.isoCode)}
								>
									{region.isoCode}
								</p>
							</Menu.Item>
						);
					})}
				</Menu.Items>
			</Menu>
		</>
	);
}
