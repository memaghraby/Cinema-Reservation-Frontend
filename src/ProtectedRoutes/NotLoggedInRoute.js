import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const NotLoggedInRoute = ({
  ...rest
}) => {
    const auth = localStorage.getItem("isLoggedIn"); // determine if authorized, from context or however you're doing it
    const userType = localStorage.getItem("userType");

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    //return auth ? <Navigate to="/" /> : <Outlet/>;

    // if(auth){
    //   if(userType === 'customer'){
    //     <Navigate to="/customermovieslist"/>
    //   }
    //   else{
    //     <Navigate to="/managermovieslist"/>
    //   }
    // }
    // else{
    //   return <Outlet/>;
    // }
    return <Outlet />;
}