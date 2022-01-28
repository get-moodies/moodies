import OptionButton from './Option';

import {generes} from '../data'

export default function Options({handler}) {
  return (
  <>
    <h3 className="text-xl text-white font-medium first-letter:text-3xl">I'm into these kind of things right now...</h3>
{   generes.map((element,index) => 
        <OptionButton 
          key={element.id} 
          element={element}
          handler={handler} 
          index={index}
        />
)}
  </>
  );
}
