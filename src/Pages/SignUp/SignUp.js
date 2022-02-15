import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const SignUp = () => {
    const { registerUser } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const location = useLocation();

    // Submit user details 
    const onSubmit = data => {
        if (data.password === data.confirmPassword) {
            registerUser(data.email, data.password, data.name, navigate, location);
            reset();
        }
        else {
            alert(' Password did not match')
        }
    };

    return (
        <>
            <Header> </Header>
            <div className='box-design '>
            <h1 className='text-uppercase text-white text-center text-5xl pt-5'>Please create a <span className='text-color '>new user</span></h1>
                <div className='flex justify-center py-5'>               
                    <div className="d-from mt-">

                        <form className=" " onSubmit={handleSubmit(onSubmit)}>

                            <input type="text" placeholder="Enter Your Name" {...register("name", { required: true })} />
                            <br />

                            <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
                            <br />
                            <input type="password" placeholder="PassWord"  {...register("password", { required: true })} />
                            <br />
                            <input type="password" placeholder="Confirm PassWord"  {...register("confirmPassword", { required: true })} />
                           <br />
                            <button className="btn-all " type="submit">Sign Up</button>
                            <br />
                            <br />
                            <Link className='link-d text-color text-xl' to="/login"> Already have an account. </Link>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SignUp;