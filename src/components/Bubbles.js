import Bubble from './Bubble';
import useBubbles from './useBubbles'


export default function Bubbles({category, handler}) {
    const bubblePosition = useBubbles();
  
    return (
      // className='border-8 border-lime-600 rounded-xl w-full h-40 relative'
    <div className= 'mx-auto w-10/12 h-40 relative '>
       {category.map((element, index) => 
       <Bubble 
        key={element.id} 
        element={element} 
        index={index} 
        handler={handler}/>
      )}
    </div>
  );
}
