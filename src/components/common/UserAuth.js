import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.accessToken
            ? <Outlet />
            // : auth?.accessToken //changed from user to accessToken to persist login after refresh
            //     ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default UserAuth;