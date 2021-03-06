import { useState } from "react";

import Register from "../components/Register";
import Login from "../components/Login";

export default function RegisterLoginLayout({ handleClose }) {
	const [isLogInScreen, setIsLogInScreen] = useState(true);

	const screenHandler = () => {
		setIsLogInScreen(!isLogInScreen);
	};

	return (
		<>
			{/* <div className=""> */}
			<div className="flex justify-around flex-col md:flex-row">
				{isLogInScreen ? (
					<div className="flex justify-center">
						<Login screenHandler={screenHandler} handleClose={handleClose} />
					</div>
				) : (
					<div className="flex justify-center">
						<Register screenHandler={screenHandler} handleClose={handleClose} />
					</div>
				)}
			</div>
			{/* </div> */}
		</>
	);
}
