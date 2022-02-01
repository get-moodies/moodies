
export default function useBubbles() {
    const RandomNum = (start, end) => {
        return Math.floor(Math.random() * (end-start) + start)
    };

   

    function bubblePosition (index){
    // const coordinates = new Array(NumberBubbles);
    // return (coordinates.map(element => {return {x:   RandomNum(0,100), y: RandomNum(0,100), radius:RandomNum(1,10)} }))
    // const CSSVar = {
    //     "--x1": RandomNum(0,100)+'%', 
    //     "--y1": RandomNum(0,100)+'%',
    //     }\
   
        const CSSVar = {
        "--x1":RandomNum(20*(index),20*(index+1)-5) +'%', 
        "--y1": RandomNum(10,40) +'%',
        }
        
        const FixedCSSVar = [
        { "--x1": "9%", "--y1": "37%" },
        { "--x1": "32%", "--y1": "30%" },
        { "--x1": "45%", "--y1": "22%" },
        { "--x1": "74%", "--y1": "22%" },
        { "--x1": "92%", "--y1": "26%" },
        ]
        const FixedCssVar2 = [
            { "--x1": "16%", "--y1": "36%" },
            { "--x1": "30%", "--y1": "20%" },
            { "--x1": "46%", "--y1": "32%" },
            { "--x1": "63%", "--y1": "21%" },
            { "--x1": "77%", "--y1": "29%" }
        ]
        const CSSheight = RandomNum(30,45) 
            //"--y1": RandomNum(10,40) +'%',
            
    //return FixedCssVar2[index]
    return CSSVar
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