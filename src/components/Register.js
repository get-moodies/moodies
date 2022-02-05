
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import useUsers from "../components/useUsers"
import useFormData from "./useFormData"
    //and methods require this type of parameter:
	//edit: const edit = { userName:   "gerardo", privateLists : ["List 1","List 2","List 3"]}

const defaultData = {
        userName: '',
        email: '',
        password: ''
      };

export default function Register() {

const [ data, handleChange ] = useFormData(defaultData)
const {register, isLogin, changeToken, token} = useUsers()
const navigate = useNavigate();

useEffect( () => {
    if (isLogin) 
        {return  navigate(`profiles/${data.userName}`)}}
    ,[isLogin])
console.log("token", token)

return (
    <>
<div className="w-full max-w-xs ">
<div className="text-xl text-white font-bold">Join Moodies</div>     
<div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 bg-opacity-40">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input
            className="
                text-gray-700 font-medium
                shadow a
                appearance-none 
                border 
                rounded 
                w-full 
                py-2 px-3 
                leading-tight 
                focus:outline-none focus:shadow-outline" 
            name="userName" 
            type="text"
            placeholder={"Nick"}
            onChange={handleChange}
        />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Email
      </label>
      <input
            className="
                text-gray-700 font-medium
                shadow a
                appearance-none 
                border 
                rounded 
                w-full 
                py-2 px-3 
                leading-tight 
                focus:outline-none focus:shadow-outline" 
            name="email" 
            type="text"
            placeholder={"ghost@rider.coppola"}
            onChange={handleChange}
        />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
            className="
                text-gray-700 font-medium
                shadow a
                appearance-none 
                border 
                rounded 
                w-full 
                py-2 px-3 
                leading-tight 
                focus:outline-none focus:shadow-outline" 
            name="password" 
            type="password"
            placeholder={"magicword"}
            onChange={handleChange}
            //value={}
        />
        {/* <p className="text-red-500 text-xs italic">This we can activate/deactivete with a state if theres mistakes</p> */}
    </div>
    <div className="flex items-center justify-center">
      <button 
        className="btn-primary" 
        type="button" 
        onClick={()=> {
            register({
                userName:data.userName,
                email:data.email,
                magicword:data.password
            }) 
        }}>
        Join now! 
      </button>
    </div>
  </div>
</div>
<input type="text" onChange={(e)=> {changeToken(e.target.value) }} />
    </>
)
}
