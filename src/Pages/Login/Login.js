import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Login = () => {
    // const {signinUsingGoogle} = useAuth();
    const { signinUsingGoogle, loginRegisteredUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    const redirect_url = location.state?.from || '/home';

    // Registered user login 

    const onSubmit = (data) => {
        loginRegisteredUser(data.email, data.password)
            .then(result => {
                navigate(redirect_url)
            })
    }

    const handleGoogleLogin = () => {
        signinUsingGoogle()
            .then(result => {
                const user = result.user;
                // setUser(user);
                navigate(redirect_url)


            })
            .catch((error) => {
                // setError(error.massage)
            })

    }
    return (
        <>
            <Header />

            <div className="box-design banner-ls mx-auto">
                <h1 className='text-uppercase text-white text-center text-5xl pt-5'>Please <span className='text-color '>Login</span></h1>
                <div className="">
                    <div className='flex justify-center py-5'>
                        <div className="d-from mt-">

                            <form className=" " onSubmit={handleSubmit(onSubmit)}>

                                <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
                                <br />
                                <input type="password" placeholder="PassWord"  {...register("password", { required: true })} />
                                <br />
                                <button className="btn-all " type="submit">Login</button>
                                <br />
                            </form>

                            {/* Google Login  */}
                            <div className="text-center mx-auto">

                                <br />
                                {/* On Click */}
                                <button className="btn-all  mb-4">
                                    <img width="40px" alt="" /> <span className="fs-6 fw-bold p-3" onClick={handleGoogleLogin} >Login with Google</span>
                                </button>
                                <span className="d-block text-danger">

                                </span>
                                <h6 className='text-xl text-color'>Don’t have an account? <Link className='link-d' to='/register'>Register Now</Link></h6>
                            </div>
                        </div>

                    </div>

                </div>
            </div >

            <Footer />
        </>
    );
};

export default Login;