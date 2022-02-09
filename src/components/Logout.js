import { Navigate } from "react-router-dom";
import useUsers from "../components/useUsers";

export default function Logout() {
	const { logout } = useUsers();

	return (
		<button className="btn-primary mt-1 mr-3 " onClick={logout}>
			log out
		</button>
	);
}
