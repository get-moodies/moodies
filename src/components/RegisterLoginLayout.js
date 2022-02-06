import Register from "../components/Register";
import Login from "../components/Login";
import { useState } from "react";

export default function RegisterLoginLayout() {
	const [isLogInScreen, setIsLogInScreen] = useState(true);

	const screenHandler = () => {
		setIsLogInScreen(!isLogInScreen);
	};

	console.log(`isLogInScreen is ${isLogInScreen}`);

	return (
		<>
			<div className="">
				<div className="flex justify-around flex-col md:flex-row">
					{isLogInScreen ? (
						<div className="flex justify-center">
							<Login screenHandler={screenHandler} />
						</div>
					) : (
						<div className="flex justify-center">
							<Register screenHandler={screenHandler} />
						</div>
					)}
				</div>
			</div>
		</>
	);
}
