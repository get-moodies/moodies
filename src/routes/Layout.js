import Header from "../components/HeaderLayout";
import { Outlet } from "react-router-dom";

///borrar esto cuando acabe componentes
import Register from "../components/Register"
import Login from "../components/Login";

export default function Layout() {

	return (
		<div className="App-main lg:w-[1024px] mx-auto p-5 justify-center text-center w-full">
			
			<Header />
			<Outlet />

			<Register/>
			<Login/>

			<div className="backGround"></div>
		</div>
	);
}
