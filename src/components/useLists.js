import { useState } from "react"
import {useAuth} from "./ContextProvider"

function useLists  () {

const url = "https://get-moodies.herokuapp.com/"
const urlProfile = url + "profiles/"
const urlUser = url + "users/"
const list = "/playlists/"

const [allPublicAllUsers, setAllPublicAllUsers] = useState([]);
const [publicLists, setPublicLists] = useState({
    _id: "",
    publicLists: [],
    public: [
        {
            _id: "",
            name: "",
            movies: [],
            tags: [],
        },
    ],
});

const [allLists, setAllLists] = useState({
    _id: "",
    watchlist: [],
    publicLists: [],
    privateLists: [],
    blacklist: [],
    public: [
        {
            _id: "",
            name: "",
            movies: [],
            tags: [],
        },
    ],
    private: [{ _id: "", name: "", movies: [], tags: [] }],
});

const {token, setToken} = useAuth( );
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImdlcmFyZG8iLCJpYXQiOjE2NDQwMDQ2NzV9.D89LTNnixj8MExiPXYBP5uZGvCvocJ2MKYWbqZCqXaE'

function getPublicLists( userName ) {
    
    fetch( urlProfile + userName + list)
        .then((res) => res.json())
        .then((result) => {
            setPublicLists(result)
        })
}

function getAllLists( userName ) {
    
    fetch( urlUser + userName + list,
            {headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }})
        .then((res) => res.json())
        .then((result) => {
            setAllLists(result);
        })
}

function deleteList ( userName, listId ) {
   
    fetch(urlUser + userName + list + listId , {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
        }})
    .then((result) => {console.log(result)});
}

function addList (post, userName) {
    
    fetch(urlUser + userName + list, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
            },
        method: "POST",
        body: JSON.stringify(post)
        })
        .then((res) => res.json())
}

function editList ( userName, listId, put) {

    fetch(urlUser + userName + list + listId, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token},
        method: "PUT",
        body: JSON.stringify(put)
        })
    .then((res) => res.json())
    .then((result) => {console.log(result)});
}

function getAllPublicAllUsers(  ) {
    
    fetch('https://get-moodies.herokuapp.com/playlists/getpublic')
        .then((res) => res.json())
        .then((result) => {
            // console.log(result)
            setAllPublicAllUsers(result.result)
        })
        .catch((e)=> console.log(e))
}

function searchByTags ( tags ) {
    
    const tagsURL = tags.split(', ').join('&')
    
    fetch('http://localhost:4000/playlists/bytag/' + tagsURL )
        .then((res) => res.json())
        .then((result) => {
            console.log("tags:",result)
        })
        .catch((e)=> console.log(e))

}

return {
    getPublicLists, 
    getAllLists, 
    deleteList, 
    editList,
    addList,
    publicLists,
    getAllPublicAllUsers,
    searchByTags,
    allPublicAllUsers
}
}

export default useLists;



    // useLists is imported like this:
    //import useLists from "../components/useLists"
    //const {
    // getPublicLists, 
    // getAllLists, 
    // deleteList, 
    // editList,
    // addList,
    // publicLists
    // } = useLists()      
	
    // // addList object needs: {
        //                 name: req.body.name,
                    //     public: req.body.public,
                    //     movies: req.body.movies,
                    //     tags: req.body.tags,
                    //     editRight: req.params.userName
    // }                    }

	/// editList takes object with this form : 
                                    // list.name = name 
                                    // list.public = public 
                                    // list.movies = movies 
                                    // list.tags =  tags
                                    // list.editRight =  editRight