import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "./ContextProvider";

function useUsers() {
	const url = "https://get-moodies.herokuapp.com/";
	const urlProfile = url + "profile/";
	const urlUser = url + "users/";
	const navigate = useNavigate();
	const urlUserLocal = "http://localhost:4000/users";

	const [userData, setUserData] = useState({
		info: "",
		_id: "",
		userName: "",
		email: "",
		watchlist: [],
		publicLists: [],
		privateLists: [],
		blacklist: [],
	});
	const [publicUserData, setPublicUserData] = useState({
		info: "",
		_id: "",
		userName: "",
		publicLists: [],
	});

	// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImdlcmFyZG8iLCJpYXQiOjE2NDQwMDQ2NzV9.D89LTNnixj8MExiPXYBP5uZGvCvocJ2MKYWbqZCqXaE'
	const { token, setToken } = useAuth();

	const [allUsers, setAllUsers] = useState([]);

	const logout = () => {
		setToken(false);
		localStorage.setItem("token", JSON.stringify(false));
		navigate("/");
	};

	function getUserPublic(userName) {
		fetch(urlProfile + userName)
			.then((res) => res.json())
			.then((result) => {
				setPublicUserData(result);
			});
	}

	function getUser(userName) {
		fetch(urlUser + userName, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
		})
			.then((res) => res.json())
			.then((result) => {
				setUserData(result.result);
			});
	}

	function deleteUser(userName) {
		fetch(urlUser + userName, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
		}).then((result) => {
			console.log(result);
		});
	}

	function register(post) {
		fetch(urlUser, {
			headers: { "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify(post),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result._id) {
					login({
						userName: post.userName,
						magicword: post.magicword,
					});
				}
			});
	}

	function login(post) {
		fetch(url + "login", {
			headers: { "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify(post),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.success) {
					setToken(result.token);
					localStorage.setItem("token", JSON.stringify(result.token));
				}
			});
	}

	function editUser(userName, put) {
		fetch(urlUser + userName, {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			method: "PUT",
			body: JSON.stringify(put),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
			});
	}

	function getAllUsers() {
		fetch(urlUserLocal)
			.then((res) => res.json())
			.then((result) => {
				setAllUsers(result);
			});
	}

	return {
		getUserPublic,
		getUser,
		register,
		deleteUser,
		login,
		editUser,
		logout,
		userData,
		publicUserData,
		getAllUsers,
		allUsers
	};
}

export default useUsers;

// useUsers is imported like this:
//import useUsers from "../components/useUsers"
//const {getUserPublic, getUser, register, deleteUser, login, editUser} = useUsers()

// useUsers is imported:
//
//  import useUsers from "../components/useUsers"
//  const {getUserPublic, getUser, register, deleteUser, login, editUser} = useUsers()

//Methods require this type of parameter:
//
//register: const newUser = {userName:"RegisterUser",email:"user@das.de",magicword:"guest"}
//login: const log = {userName:"gerardo",magicword:"password"}
//edit: const edit = { info:   "i like movies"}
