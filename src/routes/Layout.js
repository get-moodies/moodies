import Header from "../components/HeaderLayout";
import { Outlet } from "react-router-dom";

export default function Layout() {

	return (
		<div className="App-main lg:w-[1024px] mx-auto p-5 justify-center text-center w-full">
			<Header />
			<Outlet />

			<div className="backGround"></div>
		</div>
	);
}
