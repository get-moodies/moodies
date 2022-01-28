
export default function SelectionBox({genre,startYear,endYear,generes}) {
return (<div className='border-2 border-white rounded-xl w-3/5 mx-auto p-8  sticky'>
            <p>Your selection:</p>
            <div>
            {genre.map((category,index)=> {return category && generes[index].name} 
            )}
            </div>
            <p>Start Year: {startYear}</p>
            <p>End Year: {endYear}</p>
		</div>
        
)}
