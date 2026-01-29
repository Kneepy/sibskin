import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RootRedirect: React.FC = () => {
    const location = useLocation();

    return (
        <Navigate
            to={{
                pathname: "/products",
                search: location.search,
                hash: location.hash,
            }}
            replace
        />
    );
}