import Header from "../components/HeaderLayout";
import { Outlet } from "react-router-dom";

import {useAuth} from "../components/ContextProvider"
import useUsers from "../components/useUsers"

import Logout from "../components/Logout"

export default function Layout() {
	
/// Para abajo borrar cuando sirva todo
// console.log( 	"public:", getPublicLists("gerardo"), 
//    				"private:", getAllLists("gerardo"),
				//    )
				// deleteList(gerardo), 
    // editList(gerardo),
    // addList(gerardo))
	
const {token, setToken} = useAuth( );
    
	return (
		<div className="App-main lg:w-[1024px] mx-auto p-5 justify-center text-center w-full">
			<Logout/>
			<div>Token (please keep during development): {token}</div>
			<Header />
			<Outlet />
			<div className="backGround"></div>
		</div>
	);
}
