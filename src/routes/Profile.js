import { useState } from "react";
import face from "../images/face.png";



const moviesTemplate = ["movie 1", "movie 2", "movie 3"]
const listsTemplate = [{name: "List 1", tags:["tag 1","tag 2"]}, {name: "List 2", tags:["tag 1 ","tag 2 "]}, {name: "List 3", tags:["tag 1","tag 2"]}]
const user = {
        "_id": "61fbc7efd3d53fbb96ff69da",
        "userName": "User Name",
        "modified": "2022-02-03T12:17:51.056Z",
        "watchlist": [
            "354912",
            "354912",
            "354912",
            "354912"
        ],
        "privateLists": [
            "List 1",
            "List 2",
            "List 3"
        ],
        "publicLists": [
            "Public List 1",
            "Public List 2",
            "Pulic List 3"
        ],
        "blacklist": [
            "512195",
            "512195",
            "512195",
            "512195"
        ],
        "__v": 14
}


export default function Profile() {

const [isListActive,setIsListActive] = useState(false)

return <>
    <h1 className="text-2xl font-bold text-white text-left mt-10"> {user.userName} </h1>

    <div className="flex justify-start	items-center mt-5">
            <img
                className="
                h-40 w-40
                object-contain 
                "
                src={ face}
                alt="user avatar"
            />    
            <div className="flex-column  mx-auto mb-4">
                <ul className="mb-4">
                    <li  className="text-lg font-medium text-white">So many playlists</li>
                    <li className="text-lg font-medium text-white">So many wanthced</li>
                    <li className="text-lg font-medium text-white">I like this and that</li>
                </ul>
                <button className="btn-primary">Edit User</button>
            </div>
    </div>
    <h1 className="text-xl font-bold text-white mt-10 mb-4 text-left">Movie lists</h1>

    <div className="flex items-start justify-between">
        <div className="w-full max-w-xs mr-5">
            {/* shadow for the div below: shadow-md  */}
            
            <div className="bg-white rounded-xl px-8 pt-6 pb-8 mb-4 bg-opacity-0 items-start">
                <div className="mb-4" >
                    <div
                        className="
                        hover:scale-110 hover:outline-4 
                        hover:outline-slate-400/40 hover:outline 
                        hover:outline-offset-0 hover:shadow-xl 
                        transition-all duration-700 \
                        shadow-lg 
                        max-w-2xl 
                        min-h-[110px] 
                        bg-black bg-opacity-40  
                        pr-1 
                        rounded-r-full 
                        rounded-l-[1800px] 
                        flex justify-begin content-center
                        space-x-4 
                        overflow-hidden
                        "
                        onClick={()=>setIsListActive(!isListActive)}
                        >
                        <h1 className={"text-xl font-bold text-white my-auto ml-5 "}>  Watchlist </h1>
                        <h2 className={"text-md font-medium text-white my-auto"}> Your presonal watchlist </h2>
                    </div>
                </div>
                    <div className="mb-4" >
                        <div
                            className="
                            hover:scale-110 hover:outline-4 
                            hover:outline-slate-400/40 hover:outline 
                            hover:outline-offset-0 hover:shadow-xl 
                            transition-all duration-700 \
                            shadow-lg 
                            max-w-2xl 
                            min-h-[110px] 
                            bg-black bg-opacity-40  
                            pr-1 
                            rounded-r-full 
                            rounded-l-[1800px] 
                            flex justify-begin content-center
                            space-x-4 
                            overflow-hidden
                            "
                            onClick={()=>setIsListActive(!isListActive)}
                            >
                            <h1 className={"text-xl font-bold text-white my-auto ml-5 "}>  No show List </h1>
                            <h2 className={"text-md font-medium text-white my-auto"}> Movies you selected to hidde </h2>
                        </div>
                    </div>
            
            
            
            
            
            <h1 className="text-xl font-bold text-white mt-10 mb-4 text-left">Private Lists</h1>
            {user.privateLists.map((list)=>(
                    <div className="mb-4" key={list}>
                        <div
                            className="
                            hover:scale-110 hover:outline-4 
                            hover:outline-slate-400/40 hover:outline 
                            hover:outline-offset-0 hover:shadow-xl 
                            transition-all duration-700 \
                            shadow-lg 
                            max-w-2xl 
                            min-h-[110px] 
                            bg-black bg-opacity-40  
                            pr-1 
                            rounded-r-full 
                            rounded-l-[1800px] 
                            flex justify-begin content-center
                            space-x-4 
                            overflow-hidden
                            "
                            onClick={()=>setIsListActive(!isListActive)}
                            >
                            <h1 className={"text-xl font-bold text-white my-auto ml-5 "}>  {list} </h1>
                            <h2 className={"text-lg font-bold text-white my-auto"}> Tag 1, Tag2, Tag 3 </h2>
                        </div>
                    </div>

                ))}
                <h1 className="text-xl font-bold text-white mt-10 mb-4 text-left">Public Lists</h1>
                {user.publicLists.map((list)=>(
                    <div className="mb-4" key={list}>
                        <div
                            className="
                            hover:scale-110 hover:outline-4 
                            hover:outline-slate-400/40 hover:outline 
                            hover:outline-offset-0 hover:shadow-xl 
                            transition-all duration-700 \
                            shadow-lg 
                            max-w-2xl 
                            min-h-[110px] 
                            bg-black bg-opacity-40  
                            pr-1 
                            rounded-r-full 
                            rounded-l-[1800px] 
                            flex justify-begin content-center
                            space-x-4 
                            overflow-hidden
                            "
                            onClick={()=>setIsListActive(!isListActive)}
                            >
                            <h1 className={"text-xl font-bold text-white my-auto ml-5 "}>  {list} </h1>
                            <h2 className={"text-lg font-bold text-white my-auto"}> Tag 1, Tag2, Tag 3 </h2>
                        </div>
                    </div>

                ))}
            </div>
        </div>
        <div className={isListActive ? `transition-all duration-700 w-full` : `transition-all duration-700 hidden`}  >
            <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 bg-opacity-20">
                <div className="mb-4 ">
                <h2 className=" text-xl font-bold text-white text-center">
                    Active List 
                </h2>
                </div>
                <div className="mb-4 flex items-center justify-around">
                <p className=" text-md font-medium text-white text-center">Tags: Tag1 Tag2 Tag3</p>
                <button className="btn-primary">Edit</button>
                </div>
                {moviesTemplate.map((movie)=>(
                    <div className="mb-4" key={movie}>
                        <div
                            className="
                            hover:scale-110 hover:outline-4 
                            hover:outline-slate-400/40 hover:outline 
                            hover:outline-offset-0 hover:shadow-xl 
                            transition-all duration-700 \
                            shadow-lg 
                            max-w-2xl 
                            min-h-[110px] 
                            bg-black bg-opacity-40  
                            pr-1 
                            rounded-r-full 
                            rounded-l-[1800px] 
                            flex justify-begin content-center
                            space-x-4 
                            overflow-hidden
                            "
                            >
                            <h1 className={"text-xl font-bold text-white my-auto ml-5 "}>  {movie} </h1>
                            <h2 className={"text-lg font-bold text-white my-auto"}> Info </h2>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    </div>
  </>;
}
