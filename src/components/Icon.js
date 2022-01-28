import useBubbles from './useBubbles'

export default function Icon({element,index,handler}) {
    const bubblePosition = useBubbles();
    // const CSSVar = bubblePosition(index);
    const CSSVar = bubblePosition(index)
  return (
    <>
    {/* <div className='w-20 h-20' style={{background:`  url(${element.image})`, backgroundSize:'contain',borderRadius: '5rem'}} >
  
    <p className='text-white' > {element.name} </p>
    </div> */}
    {/* <img 
    src={element.image} 
    alt="bubble image" 
    // border-4 border-lime-600 rounded-3xl
    className="bubbles absolute  h-20  hover:h-24 "  
    style={CSSVar} 
    onClick={()=>handler(index)} 
    /> */}
    <img 
    src={element.image} 
    alt="bubble image" 
    // border-4 border-lime-600 rounded-3xl
    className="icons absolute h-[5.5rem] w-[5.5rem] object-cover rounded-[5.5rem] hover:scale-105 transition-all duration-300 shadow-xl border-1 hover:shadow-xl"  
    style={CSSVar} 
    onClick={()=>handler(index)} 
    />
     {/* hover:h-24  */}

    </>
  )}