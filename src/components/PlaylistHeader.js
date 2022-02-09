import { useState } from "react";


export default function PlaylistHeader({ setListInfo, editListHandler, allLists, selectedIndex }) {

const [editDisplay, setEditDisplay] = useState("default");
const list = allLists.public[selectedIndex]
const put = {
    "name": list?.name,
    "public": list?.public,
    "movies": list?.movies,
    "tags": list?.tags,
    "editRight": list?.editRight
}

// setListInfo(put)

if (editDisplay === "default") {
        return (
            <>
                <div className="mb-4 mt-6 ">
                    <h2 className="text-lg font-medium text-white  mb-5 text-center">
                        {allLists.public[selectedIndex]?.name}
                    </h2>
                    <h2 className={"text-base font-medium text-white mb-6 my-auto"}>
                        {allLists?.public[selectedIndex]?.tags.map((tag, index) => (
                            <>#{tag} </>
                        ))}
                    </h2>
                </div>
                <div className="mb-4 flex items-center justify-around">
                    <button
                        className="btn-primary w-36"
                        onClick={() => {
                            setListInfo(put)
                            setEditDisplay("editname");
                        }}
                    >
                        edit name
                    </button>
                    <button
                        className="btn-primary w-36"
                        onClick={() => {
                            setListInfo({...put, name: list.name })
                            setEditDisplay("addtag");
                        }}
                    >
                        add tag
                    </button>
                    <button className="btn-primary w-36">add movie</button>
                    <button className="btn-primary w-36">delete list</button>
                </div>
            </>
        );
    } 
    
else if (editDisplay === "editname") {
        return (
            <>
                <div className="mb-4 mt-6">
                    <input
                        className="
                            form-control
                            block
                            w-lg
                            mx-auto
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            mt-2
                            mb-3
                            focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                        id="info"
                        type="info"
                        name="info"
                        placeholder={"change playlist name..."}
                        onChange={(e)=> setListInfo({...put, name: e.target.value })}
                    />
                    <h2 className={"text-base font-medium text-white mb-2 my-auto"}>
                        {allLists.public[selectedIndex].tags.map((tag, index) => (
                            <>#{tag} </>
                        ))}
                    </h2>
                </div>
                <div className="mb-4 flex items-center justify-around">
                    <button
                        className="btn-primary w-36"
                        onClick={() => {
                            setEditDisplay("default");
                            editListHandler(list._id)
                        }}
                    >
                        submit
                    </button>
                </div>
            </>
        );
    } 
else if (editDisplay === "addtag") {
        return (
            <>
                <div className="mb-4 mt-6 ">
                    <h2 className="text-lg font-medium text-white  mb-2 text-center">
                        {allLists.public[selectedIndex].name}
                    </h2>
                    <input
                        className="
                            form-control
                            block
                            w-lg
                            mx-auto
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            mt-2
                            focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                        id="info"
                        type="info"
                        name="info"
                        placeholder={"add tag..."}
                        onChange={(e)=> 
                            setListInfo({...put, tags: [...list.tags, e.target.value ] })
                        }
                    />
                </div>
                <div className="mb-4 flex items-center justify-around">
                    <button
                        className="btn-primary w-36"
                        onClick={() => {
                            setEditDisplay("default");
                            editListHandler(list._id);
                        }}
                    >
                        submit
                    </button>
                </div>
            </>
        );
    }

  
  
  
  ;
}
