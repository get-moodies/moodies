import useBubbles from './useBubbles'

export default function Bubble({element,index,handler}) {
    const bubblePosition = useBubbles();
    // const CSSVar = bubblePosition(index);
    const CSSVar = bubblePosition(index)
  return (
    <>
    {/* <div className='w-20 h-20' style={{background:`  url(${element.image})`, backgroundSize:'contain',borderRadius: '5rem'}} >
  
    <p className='text-white' > {element.name} </p>
    </div> */}
      <div 
        // border-4 border-lime-600 rounded-3xl
        className="
          bubbles 
          absolute h-20 w-20 
          pt-[1.7em] px-auto 
          border-2 border-white
          text-white font-medium  
          opacity-0  
          z-10 
          hover:bg-slate-600
          hover:opacity-100
          hover:bg-opacity-50	
          hover:scale-105 
          hover:shadow-xl
          transition-all duration-300 
          shadow-lg 
          "  
        style={CSSVar} 
        onClick={()=>handler(index,"era")} 

      >
      {element.name}
      </div>
      <img 
        src={element.image} 
        alt="bubble image" 
        // border-4 border-lime-600 rounded-3xl
        className="bubbles absolute  h-20 w-20 hover:h-24 z-0 border-2 border-white hover:scale-105 "  
        style={CSSVar} 
      />
      
      </>
  )}
