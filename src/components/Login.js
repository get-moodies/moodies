import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import useUsers from "../components/useUsers";
import useFormData from "./useFormData";
import { useAuth } from "./ContextProvider";

const defaultData = {
	userName: "",
	password: "",
};

export default function Login({ screenHandler, handleClose }) {
	const [data, handleChange] = useFormData(defaultData);
	const { login } = useUsers();
	const { isLoggedIn } = useAuth();
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (isLoggedIn()) {
	// 		return navigate(`/moodies/users/${data.userName}`);
	// 	}
	// }, [isLoggedIn]);
	console.log(data.userName);
	return (
		<>
			<div className="max-w-xs ">
				<div className="bg-black shadow-lg rounded-xl px-8 pt-2 pb-8 bg-opacity-80">
					<div className="text-xl text-white font-medium m-5">login</div>
					<div className="mb-4">
						<label
							className="block text-white text-sm font-base mb-2"
							htmlFor="username"
						>
							username
						</label>
						<input
							className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
							id="username"
							type="text"
							name="userName"
							placeholder={"nickcage64"}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-8">
						<label
							className="block text-white text-sm font-base mb-2"
							htmlFor="password"
						>
							password
						</label>
						<input
							className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
							id="password"
							type="password"
							name="password"
							placeholder={"magicword22"}
							onChange={handleChange}
						/>
						{/* <p className="text-red-500 text-xs italic">
							This we can activate/deactivete with a state if theres mistakes
						</p> */}
					</div>
					<div className="flex items-center justify-between">
						<button
							className="
                            mr-2 bg-gray-400 hover:bg-gray-300  px-4 py-2 rounded-full font-medium text-sm  text-slate-900"
							type="button"
							onClick={() => {
								login({
									userName: data.userName,
									magicword: data.password,
								});
								handleClose();
							}}
						>
							sign in
						</button>
						<a
							className="inline-block mt-0 hover:cursor-pointer  align-baseline font-base text-sm text-gray-400 hover:text-gray-300"
							href="#"
						>
							forgot password
						</a>
					</div>
					<a
						className="inline-block mt-4 hover:cursor-pointer  align-baseline font-base text-sm text-gray-400 hover:text-gray-300"
						onClick={screenHandler}
					>
						register
					</a>
				</div>
			</div>
		</>
	);
}
