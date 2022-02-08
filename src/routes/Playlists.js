import { useState } from "react"
import { useEffect } from "react"

import useLists from "../components/useLists"
import useUsers from "../components/useUsers"

	
     
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

    useEffect(()=>{
        // getAllUsers()
        getAllPublicAllUsers()
    },[])
    // searchByTags("test, rainy days")

    return (
  <>
    <h1 className="text-2xl font-medium text-white text-left mt-12 ">Browse Playlists</h1>
    <div className="flex flex-col justify-left">
        {allPublicAllUsers.map((list) => <div key={list._id} >{list.name}</div> ) }
    </div>
  </>
  )
}
