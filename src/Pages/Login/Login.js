import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    // const {signinUsingGoogle} = useAuth();
    const {signinUsingGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate()

    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin=()=>{
        signinUsingGoogle()
        .then(result => {
            const user = result.user;
            // setUser(user);
            navigate(redirect_url)
           
            
        })
        .catch((error)=>{
            // setError(error.massage)
        })
        
    }
    return (
        <div className="banner-login banner-ls mx-auto">
            <div className="d-login">
                <div className="text-center mx-auto">
                    <h1>Login Account</h1>
                    <br />
                    {/* On Click */}
                    <button className="btn btn-outline-primary mb-4">
                        <img width="40px"  alt="" /> <span className="fs-6 fw-bold p-3" onClick={handleGoogleLogin} >Login with Google</span>
                    </button>
                    <span className="d-block text-danger">
                        
                    </span>
                    <h6>Don’t have an account? <Link to='/register'>Register</Link></h6>
                </div>
            </div>
        </div >
    );
};

export default Login;