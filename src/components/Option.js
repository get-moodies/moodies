export default function Option({element, handler,index,isSelected}) {
  return <button  
        
          className={ !isSelected ? `
            shadow-lg 
            m-1 my-5 
            h-10
            bg-opacity-40 bg-black 
            hover:bg-black hover:bg-opacity-60 
            px-4 py-2 
            rounded-full 
            font-medium text-sm text-white
            ` 
            : `
            shadow-lg 
            m-1 my-5 
            h-10 
          bg-black bg-opacity-60 
            px-4 py-2 
            rounded-full 
            font-medium text-sm text-white"
            focus:outline-none 
            focus:ring 
            focus:ring-violet-300
            focus:h-12
            ` } 
          
          
          
          
         
                    onClick={()=>handler(index)} 
        >
            {element.name}
        </button>
       
}


// '
// m-1 my-5 px-4 py-2 
// bg-opacity-20 bg-black 
// hover:bg-black hover:bg-opacity-40 
// rounded-full 
// font-medium 
// outline outline-offset-0 outline-1 outline-white 
// text-white
// focus:outline-none 
// focus:ring 
// focus:ring-violet-300
// focus:h-20
// active:bg-violet-600
// ' 