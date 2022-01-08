import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const NotLoggedInRoute = ({
  ...rest
}) => {
    const auth = localStorage.getItem("isLoggedIn") === "true"; // determine if authorized, from context or however you're doing it
    
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    //return auth ? <Navigate to="/" /> : <Outlet/>;
    
    if(auth){
      const userType = localStorage.getItem("userType");
      if(userType === "manager"){
        return <Navigate to="/managermovieslist"/>
      }
      else{
        return <Navigate to="/customermovieslist"/>
      }
    }
    else{
      return <Outlet/>;
    }
}