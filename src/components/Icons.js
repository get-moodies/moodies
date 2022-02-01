import Icon from './Icon';


export default function Icons({category, handler, genre}) {

    return (
    <div className={` flex items-center justify-center `} >
      <div className={`
              m-4
              grid grid-cols-5 gap-x-4 gap-y-4
              place-items-center
            `}
      >
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
    </div>
  );
}