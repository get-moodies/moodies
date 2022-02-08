import { useState } from "react"
import { useEffect } from "react"

import useLists from "../components/useLists"
import useUsers from "../components/useUsers"

import RenderList from "../components/RenderList"
	
     
export default function Playlists() {

    const {
        getPublicLists, 
        getAllLists, 
        deleteList, 
        editList,
        addList,
        publicLists,
        getAllPublicAllUsers,
        searchByTags,
        allPublicAllUsers
        } = useLists()    
    
    const { allUsers, getAllUsers, getUserPublic, getUser, register, deleteUser, login, editUser} = useUsers()
    
    const [allPublicPlaylists, setAllPublicPlaylists] = useState([]);
    const [selectedList, setSelectedList] = useState(null);
    useEffect(()=>{
        getAllPublicAllUsers()
    },[])
    // searchByTags("test, rainy days")
    
    const listHandler = (index) => {
        index === null ?   setSelectedList(null) : setSelectedList(index)
    }
    
return (
  <>
    <h1 className="text-2xl font-bold text-white text-left mt-12 ">Browse Playlists</h1>
    <div className="
                mx-auto  
                flex flex-wrap items-center justify-around 
                max-h-[30%]
                overflow-auto
                ">
            {allPublicAllUsers.map((list,index) => <div 
                                                key={list._id} 
                                                className="
                                                    bg-violet-300 bg-opacity-40
                                                    hover:scale-150 hover:shadow-2xl
                                                    transition-all duration-500 
                                                    shadow-xl  
                                                    m-3 p-3
                                                    rounded-lg 

                                                    justify-center
                                                    text-white" 
                                                onClick={()=> listHandler(index) }
                                            >
                                            <h2 className="text-center text-lg font-bold  ">{list.name}</h2>
                                            <span className="text-left text-md font-semibold mr-2">
                                                Tags: 
                                            </span>
                                            {list.tags?.map( (tag,index) =>  
                                                <span className="text-left text-md font-medium " key={index} >
                                                    {tag + " "} 
                                                </span> || <span className="text-left	text-md font-medium ">no tags here yet </span>  
                                            )}
                                            <br/>
                                            <span className="text-left text-md font-semibold  " > By: </span>  
                                                {list.editRight.map( (user,index) =>  <span className="text-left text-md font-medium " key={index} >
                                                {user}
                                                </span>
                                            )}
                                            </div> 
                                    )}
        
    </div>
    { (selectedList || selectedList === 0) &&
    <div className="px-8 h-[600px] pt-0 pb-8 ml-0 md:ml-6 mb-4 border-0 border-white w-full mt-0">
             	
        <RenderList 
            listInfo={allPublicAllUsers[selectedList]}
            listHandler={listHandler}
        />	
                    
                    
                    {/* {(() => {
						if (activeList === "WatchLater") {
							return <WatchLater />;
						} else if (activeList === "HiddenList") {
							return <HiddenList />;
						} else if (activeList === `public${selectedIndex}`) {
							return (
								<PublicList selectedIndex={selectedIndex} allLists={allLists} />
							);
						} else if (activeList === `private${selectedIndex}`) {
							return (
								<PrivateList
									selectedIndex={selectedIndex}
									allLists={allLists}
								/>
							);
						}
					})()} */}
	</div>
    }       
  </>
  )
}
