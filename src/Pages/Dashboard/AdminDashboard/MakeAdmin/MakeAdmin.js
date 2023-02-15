import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        reset();
        setEmail(data);
        fetch('https://pixacam-serverside-mhrazib121.vercel.app/users/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className=' box-design'>
            <h1 className='text-uppercase text-white text-center text-5xl pt-5'>Make <span className='text-color '>Admin</span></h1>
            <div className="">

                <div className='flex justify-center'>
                    <div className='d-from'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className=" p-2" type="email" placeholder="Enter Email address" {...register("email")} />
                            <br />
                            <input className=" mt-3" type="submit" value="Admin" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;