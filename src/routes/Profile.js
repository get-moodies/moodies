import face from "../images/face.png";


export default function Profile() {
return <>
    <h1 className="text-2xl font-bold text-white text-left mt-10">User Name</h1>

    <div className="flex justify-start	 align-middle mt-5">
            <img
                className="
                h-40 w-40
                object-contain 
                "
                src={ face}
                alt="user avatar"
            />    
            <div className="flex-column  mx-auto">
                <ul className="list-disc">
                    <li  className="text-lg font-medium text-white">So many playlists</li>
                    <li className="text-lg font-medium text-white">So many wanthced</li>
                    <li className="text-lg font-medium text-white">I like this and that</li>
                </ul>
                <button className="btn-primary">Edit User</button>
            </div>
    </div>
    <h1 className="text-xl font-bold text-white mt-10 text-left">Playlists</h1>

    <div className="flex-col content-start justify-start mt-10">
     <div
        className="
            hover:scale-150 hover:outline-4 hover:outline-slate-400/40 hover:outline hover:outline-offset-0 hover:shadow-xl 
            transition-all duration-700 \
            shadow-lg 
            
            max-w-2xl 
            min-h-[110px] 
            my-5 
            bg-black bg-opacity-40  
            pr-1 
            rounded-r-full 
            rounded-l-[1800px] 
            flex justify-begin content-center
            space-x-4 
            overflow-hidden
            "
    >
        <h1 className={"text-xl font-bold text-white my-auto ml-5 "}>  PlayList 1 </h1>
        <h2 className={"text-lg font-bold text-white my-auto"}> Tags: funny, rainy, moods </h2>
    </div>
    <div
        className="
            scale-110 
            outline-4 
            outline-slate-400/40  
            outline outline-offset-0 
            shadow-xl 
            relative 
            max-w-2xl 
            h-[110px] 
            mx-auto my-5 
            bg-black bg-opacity-40  
            pr-1 
            rounded-r-full 
            rounded-l-[1800px] 
            flex items-center 
            text-left 
            space-x-4 
            overflow-hidden
            "
    >
 
       <h1 className={"text-xl font-bold text-white ml-5 my-auto"}>  Selected Playlist </h1>
        <h2 className={"text-lg font-bold text-white my-auto"}> Tags: funny, rainy, moods </h2>

    </div>
    <div
        className="
            hover:scale-150 hover:outline-4 hover:outline-slate-400/40 hover:outline hover:outline-offset-0 hover:shadow-xl 
            transition-all duration-700 \
            shadow-lg 
            max-w-2xl 
            h-[110px] 
            my-5 
            bg-black bg-opacity-40  
            pr-1 
            rounded-r-full 
            rounded-l-[1800px] 
            overflow-hidden
            "
    >
        <h1 className={"text-xl font-bold text-white mr-auto mt-auto "}>  PlayList 3 </h1>
        <h2 className={"text-lg font-bold text-white mr-auto my-auto"}> Tags: funny, rainy, moods </h2>
    </div>
    </div>
    
  </>;
}
