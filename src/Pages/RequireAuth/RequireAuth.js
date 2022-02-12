import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const RequireAuth = ({children, ...rest}) => {
    console.log(children)
    const {user} = useAuth();
    const location = useLocation()
    if(!user.email){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default RequireAuth;