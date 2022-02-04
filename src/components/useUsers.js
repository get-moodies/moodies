import { useState} from "react";

function useUsers  () {

const url = "https://get-moodies.herokuapp.com/"
const urlProfile = url + "profile/"
const urlUser = url + "users/"

function getUserPublic( userName ) {
    fetch( urlProfile + userName)
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
            
        })
}

function getUser( userName) {
    //change this to cookie token
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImdlcmFyZG8iLCJpYXQiOjE2NDQwMDQ2NzV9.D89LTNnixj8MExiPXYBP5uZGvCvocJ2MKYWbqZCqXaE'
    fetch( urlUser + userName,
            {headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }})
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
        })
}

function deleteUser ( userName ) {
    //change this to cookie token
    const token = '61fd8d87756a87fbda1e2ae1'
    fetch(urlUser + userName, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
        }})
    .then((result) => {console.log(result)});
}

function register (post) {
    fetch(urlUser , {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(post)
    })
        .then((res) => res.json())
        .then((result) => {console.log(result)});
}

function login (post) {
    fetch(url + "login", {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(post)
    })
        .then((res) => res.json())
        .then((result) => {console.log(result)});
}

function editUser ( userName, put) {
    //Change this token
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImdlcmFyZG8iLCJpYXQiOjE2NDQwMDQ2NzV9.D89LTNnixj8MExiPXYBP5uZGvCvocJ2MKYWbqZCqXaE'

    fetch(urlUser + userName, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token},
        method: "PUT",
        body: JSON.stringify(put)
        })
    .then((res) => res.json())
    .then((result) => {console.log(result)});
}

return {getUserPublic, getUser, register, deleteUser, login, editUser}
}

export default useUsers;



    // useUsers is imported like this:
    //import useUsers from "../components/useUsers"
    //const {getUserPublic, getUser, register, deleteUser, login, editUser} = useUsers()
	
    //and methods require this type of parameter:
    //register: const newUser = {userName:"RegisterUser",email:"user@das.de",magicword:"guest"}
	//login: const log = {userName:"gerardo",magicword:"password"}
	//edit: const edit = { userName:   "gerardo", privateLists : ["List 1","List 2","List 3"]}
	