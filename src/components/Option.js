export default function Option({element, handler,index}) {
  return <button  
          className='
                    m-1 my-5 px-4 py-2 
                    bg-opacity-20 bg-black 
                    hover:bg-black hover:bg-opacity-40 
                    rounded-full 
                    font-medium 
                    outline outline-offset-0 outline-1 outline-white 
                    text-white
                    focus:outline-none 
                    focus:ring 
                    focus:ring-violet-300
                    focus:h-20
                    active:bg-violet-600
                    ' 
                    onClick={()=>handler(index)} 
        >
            {element.name}
        </button>
       
}
