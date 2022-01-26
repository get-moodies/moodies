import Bubble from './Bubble';
import useBubbles from './useBubbles'


export default function Bubbles({category}) {
    const bubblePosition = useBubbles();
    //console.log("Im here in bubbles")
    //console.log(category.length )
    const coord = bubblePosition(100)
    console.log('here coiod',coord)
    return (
    <>
       {category.map((element) => <Bubble key={element.id} element={element}/>)}
    </>
  );
}
