import Bubble from './Bubble';


export default function Bubbles({category, handler,ageSelected}) {
  
    return (
    <div className= 'mx-auto  flex flex-col items-center justify-center my-4'>
       {category.map((element, index) => 
          <Bubble 
            key={element.id} 
            element={element} 
            index={index} 
            handler={handler}
            isSelected={ageSelected[index]}
            />
      )}
    </div>
  );
}
