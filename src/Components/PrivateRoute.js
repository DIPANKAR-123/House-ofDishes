import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function PrivateRoute({isLoggedIn,children}) {
     
    const { user, isAuthenticated, isLoading } = useAuth0();
    
        if(isAuthenticated){
            return  children; 
        }else{
            return <Navigate to="/login"></Navigate>
        }

  
}

export default PrivateRoute