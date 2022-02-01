import { regions } from "../data";
import { Menu } from "@headlessui/react";

export default function Dropdown({ region, regionHandler }) {
	return (
		<>
			<Menu>
				<Menu.Button
					className="
                
                shadow-lg 
                mt-1 mr-3 px-4 py-2
				h-10
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
						mt-1 mr-3 px-4 py-2  
						bg-opacity-40 
						bg-black 
						rounded-full 
						font-medium 
						text-center
						text-sm 
						outline-0 
						text-white
						absolute
						left-[58.4%]
						z-20
						h-96
						overflow-auto
						hover:cursor-pointer	
						"
				>
					{regions.map((region) => {
						return (
							<Menu.Item key={region.isoCode}>
								<p
									className="text-white px-2 py-2  rounded-full  hover:bg-black hover:bg-opacity-60 
									 "
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
