
export default function Login() {

return (
<>
<div class="w-full max-w-xs ">
    <div className="text-xl text-white font-bold">Log in</div>     
  <div class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 bg-opacity-40">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
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
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
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
            id="username" 
            type="password"
            placeholder={"magicword"}
            //onChange={}
            //value={}
        />
        <p class="text-red-500 text-xs italic">This we can activate/deactivete with a state if theres mistakes</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="
            @apply shadow-lg 
            bg-opacity-40 bg-black 
            hover:bg-black hover:bg-opacity-60 
            px-4 py-2 
            rounded-full 
            font-medium text-sm text-white
            whitespace-nowrap" 
            type="button"
        >
        Sign in! 
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        What was my password?
      </a>
    </div>
  </div>
</div>
</>
)
}
