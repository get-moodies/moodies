
export default function TimeSlider({handler, startYear,endYear}) {
  return (

  <div className="relative pt-2">
  <h3 className="text-xl text-white font-medium ">... and am only interested in </h3>
  <span className="in-line text-5xl text-white font-semibold ">{startYear}</span>
  <span className="in-line text-5xl text-white font-semibold "> to </span>
  <span className="in-line text-5xl text-white font-semibold ">{endYear}</span>
  <div className="flex">
  <input
    type="range"
    min="1950"
    max="2022"
    className="
    form-range
    appearance-none
    w-9/12
    h-8
    m-1 my-5 px-4 py-2 
    focus:outline-none focus:ring-0 focus:shadow-none
    bg-opacity-20 
    bg-black 
    hover:bg-black 
    hover:bg-opacity-40  
    rounded-full 
    outline outline-offset-0 outline-1 outline-white 
"
    id="TimeSlider"
    onChange={ (e)=> handler(e.currentTarget.value,"start")}
    value={startYear}
  />
   <input
    type="range"
    min={startYear}
    max="2022"
    value={Math.max(endYear,startYear)}
    className="
    form-range
    appearance-none
    w-9/12
    h-8
    m-1 my-5 px-4 py-2 
    focus:outline-none focus:ring-0 focus:shadow-none
    bg-opacity-20 
    bg-black 
    hover:bg-black 
    hover:bg-opacity-40  
    rounded-full 
    outline outline-offset-0 outline-1 outline-white 
"
  id="TimeSlider"
  onChange={ (e)=> handler(e.currentTarget.value,"end")  }
  />
  {/* <label htmlFor="TimeSlider" className="form-label text-white">{startYear}</label> */}
  </div>

</div>

  )}
