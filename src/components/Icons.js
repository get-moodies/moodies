import Icon from './Icon';


export default function Icons({category, handler, genre}) {

    return (
      // className='border-8 border-lime-600 rounded-xl w-full h-40 relative'
    <div className= 'mx-auto w-10/12 h-40 relative '>
       {category.map((element, index) => 
       <Icon
        key={element.id} 
        element={element} 
        index={index} 
        handler={handler}
        isSelected={genre[index]}
        />
      )}
    </div>
  );
}