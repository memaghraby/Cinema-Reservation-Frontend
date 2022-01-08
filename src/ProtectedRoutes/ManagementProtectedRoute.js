import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ManagementProtectedRoute = () => {
    const auth = localStorage.getItem("isLoggedIn")==="true" && (localStorage.getItem("userType")==="manager"   || localStorage.getItem("userType")==="admin" );
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet/> : <Navigate to="/" />;
}