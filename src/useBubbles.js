
export default function useBubbles() {
    const RandomNum = (start, end) => {
        return Math.floor(Math.random() * (end-start) + start)
    };

    function bubblePosition (NumberBubbles){
    const coordinates = new Array(NumberBubbles);
    return (coordinates.map(element => {return {x:   RandomNum(0,100), y: RandomNum(0,100), radius:RandomNum(1,10)} }))
    }
    return bubblePosition;
}










// const Angle = (y, x) => {
//     if (x > 0) return Math.atan(y / x);
//     return Math.PI + Math.atan(y / x);
// };

// const AngleCss = (y, x) => {
//     const offset = Math.PI / 2 - 0.4;
//     return offset - Angle(y, x);
// };

// const position = [
//     RandomNum(65),
//     RandomNum(65),
//     RandomNum(65),
//     RandomNum(65),
//     RandomNum(65),
//     RandomNum(65),
// ];