import useUsers from "../components/useUsers"
    
	
    //and methods require this type of parameter:
    //register: const newUser = {userName:"RegisterUser",email:"user@das.de",magicword:"guest"}
	//login: const log = {userName:"gerardo",magicword:"password"}
	//edit: const edit = { userName:   "gerardo", privateLists : ["List 1","List 2","List 3"]}
	
export default function Register() {
    
const {register} = useUsers()
    
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
            id="username" 
            type="text"
            placeholder={"Nick"}
            //onChange={}
            //value={}
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
            id="email" 
            type="text"
            placeholder={"ghost@rider.coppola"}
            //onChange={}
            //value={}
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
            id="password" 
            type="password"
            placeholder={"magicword"}
            //onChange={}
            //value={}
        />
        <p className="text-red-500 text-xs italic">This we can activate/deactivete with a state if theres mistakes</p>
    </div>
    <div className="flex items-center justify-center">
      <button className="btn-primary" type="button">
        Join now! 
      </button>
    </div>
  </div>
</div>



    
    </>
)
}
