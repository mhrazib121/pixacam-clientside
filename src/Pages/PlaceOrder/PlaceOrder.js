import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useProducts from '../../Hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const [products] = useProducts();
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const redirect_url = location.state?.from || '/dashboard/dashboard/myorder';

    const productData = products.find(product => product._id === id)
    console.log(productData);
    const onSubmit = data => {
        data.product = productData;
        data.status = 'Pending';
        console.log(productData)

        axios.post('https://obscure-beyond-83290.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Placing order successfully');
                    reset();
                    navigate(redirect_url)
                }
            })
    }
    return (
        <div>
            <Header />
            <div className='container row mx-auto my-5 pt-5 pb-5'>
                <section className="col-lg-6 my-4  ">
                    <h3 > Package Name: {productData?.productName}  </h3>
                    <img className="w-50 my-3" src={productData?.img} alt="" />
                    <p > Details: {productData?.description} </p>
                    <h4 > Package Price: $ {productData?.price} </h4>
                </section>
                <section className='col-lg-6  my-4 mx-auto form-design text-center'>
                    <h3> Provide Your Information:</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName")} value={user.displayName} /> <br />
                        <input type='email' {...register("email")} value={user.email} /> <br />
                        <input type='date' {...register("orderDate")} /> <br />
                        <input type='number' {...register("phone")} /> <br />
                        <input type='address' {...register("address")} /> <br />
                        <input type="submit" to="/mybooking" />
                    </form>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default PlaceOrder;