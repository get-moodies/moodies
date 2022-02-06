import Header from "../components/HeaderLayout";
import { Outlet } from "react-router-dom";

///borrar esto cuando acabe componentes
// import Register from "../components/Register"
// import Login from "../components/Login";
// import useUsers from "../components/useUsers"
// import { useState } from "react";
// import { useEffect } from "react";

export default function Layout() {

// const [isLoggedIn,setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')));
// const {logout} = useUsers()
// useEffect(()=>{
// console.log("en layout:", isLoggedIn);},[isLoggedIn]
// )
	return (
		<div className="App-main lg:w-[1024px] mx-auto p-5 justify-center text-center w-full">
			
			<Header />
			<Outlet />

			<div className="backGround"></div>
		</div>
	);
}
