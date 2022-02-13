import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';

const ReviewProvide = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        data.img = user.photoURL;
        axios.post('https://obscure-beyond-83290.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks for your valuable feedback!');
                    reset();
                }
            })
    }
    return (
        <div className=' box-design  add-banner'>
            {/* <img className='banne' src={banner} alt="" /> */}

            <div className=' bg-t  p-5 mx-auto'>
                <div className='mt-5 text-center mx-auto'>
                    <div className='d-from'>
                        <h2 className='tittle'>Provide Your Valuable Feedback: </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("customerName")} value={user.displayName} /> <br />
                            <input type="text" {...register("customerEmail")} value={user.email} /> <br />
                            <input type='text' {...register("feedback", { require: true })} placeholder="Give your feedback" /> <br />
                            <input type='number' {...register("rating", { required: true, min: 1, max: 5 })} placeholder="Give your rating between 1 to 5" /> <br />
                            <input className='btn btn-primary mt-4' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewProvide;