import useAuth from "../hooks/useAuth";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import Main from "./main/Main";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.email ?
            <Outlet/>
            : <Navigate to= "/login" state={{from: location}} replace />
    );
}

export default RequireAuth;