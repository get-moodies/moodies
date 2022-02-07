
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import useUsers from "../components/useUsers"
import useFormData from "./useFormData"
import { useAuth } from "./ContextProvider";

const defaultData = {
        userName: '',
        email: '',
        password: ''
      };

export default function Register({ screenHandler }) {
	const [ data, handleChange ] = useFormData(defaultData)
    const {register, logout} = useUsers()
    const {isLoggedIn} = useAuth()

    const navigate = useNavigate();


    useEffect( () => {
        if (isLoggedIn()) 
            {return  navigate(`profiles/${data.userName}`)}}
        ,[isLoggedIn])

	return (
		<>

            {/* {isLoggedIn() && <h1>In register: Is logged in</h1>} */}
            {/* <button className="btn-primary" onClick={()=>{logout()}}> Log out</button> */}

			<div className=" max-w-xs ">
				<div className="bg-black shadow-lg rounded-xl px-8 pt-2 pb-8 bg-opacity-80">
					<div className="text-xl text-white font-medium m-5">join moodies</div>
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
							
							type="text"
							placeholder={"nickcage64"}
							name="userName" 
                            onChange={handleChange}
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-white text-sm font-base mb-2"
							htmlFor="password"
						>
							email
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
							
							type="text"
							placeholder={"ghost@rider.coppola"}
							name="email" 
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
							
							type="password"
							placeholder={"magicword22"}
							name="password" 
                            onChange={handleChange}
						/>
						{/* <p className="text-red-500 text-xs italic">
							This we can activate/deactivete with a state if theres mistakes
						</p> */}
					</div>
					<div className="flex items-center justify-center">
						<button
							className="
                            bg-gray-400 hover:bg-gray-300  px-4 py-2 rounded-full font-medium text-sm  text-slate-900"
							type="button"
                            onClick={()=> {
                                register({
                                    userName:data.userName,
                                    email:data.email,
                                    magicword:data.password
                                }) 
                            }}
						>
							register
						</button>
					</div>
					<a
						className="inline-block mt-4 hover:cursor-pointer  align-baseline font-base text-sm text-gray-400 hover:text-gray-300"
						onClick={screenHandler}
					>
						login
					</a>
				</div>
			</div>
		</>
	);

}
