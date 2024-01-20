import { useContext } from "react";
import RoutesApp from "./app.routes";
import RoutesLogin from "./login.routes";
import { AuthContext } from "../contexts/AuthContext";

export default function Routes() {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        isAuthenticated ? <RoutesApp /> : <RoutesLogin />
    )
}