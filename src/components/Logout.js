import useUsers from "../components/useUsers"


export default function Logout() {
    
    const {logout} = useUsers()
  
    return 			<button className="btn-primary" onClick={logout}>Log out</button>
    ;
}
