import Header from "../components/HeaderLayout";
import { Outlet } from "react-router-dom";
import useLists from "../components/useLists"

//import RegisterLoginLayout from "../components/RegisterLoginLayout";

export default function Layout() {

const {
    getPublicLists, 
    getAllLists, 
    deleteList, 
    editList,
    addList
} = useLists()
	
console.log( 	"public:", getPublicLists("gerardo"), 
   				"private:", getAllLists("gerardo"))
    // deleteList(gerardo), 
    // editList(gerardo),
    // addList(gerardo))
	return (
		<div className="App-main lg:w-[1024px] mx-auto p-5 justify-center text-center w-full">
			<Header />
			<Outlet />
			<div className="backGround"></div>
		</div>
	);
}
