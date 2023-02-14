import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddCardItems from '../../Card/AddCardItems/AddCardItems';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth();
    const [cartDetails, setCartDetails] = useState([])
    const { register, handleSubmit, reset } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    const redirect_url = location.state?.from || '/dashboard/dashboard/myorder';

    useEffect(() => {
        fetch('https://pixacam-serverside-mhrazib121.vercel.app/productscard')
            .then(res => res.json())
            .then(data => {
                const myCart = data.filter(cart => cart.cart.email === user.email);
                setCartDetails(myCart);
            })
    }, [user.email])

    const onSubmit = data => {
        data.status = 'Pending';
        data.myOrder = cartDetails;

        axios.post('https://pixacam-serverside-mhrazib121.vercel.app/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Placing order successfully');
                    reset();
                    navigate(redirect_url);
                }
            })
    }

    // Order cancel function 
    const removeItems = (id) => {
        const proced = window.confirm('Do you want to cancel your order');
        if (proced) {

            const url = `https://pixacam-serverside-mhrazib121.vercel.app/productscard/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log("kasdj")
                    if (data.deletedCount > 0) {
                        alert('Successfully Cancel Your Order');
                        const remainigOrders = cartDetails.filter(order => order._id !== id);
                        setCartDetails(remainigOrders);
                    }
                })
        }
    }

    return (
        <div>
            <Header />

            {cartDetails.length ?
                <div>
                    <table className='container my-5'>
                        <thead className=''>
                            <tr className='text-light text-black text-center fs-6 fw-bold'>
                                <td className='p-2 w-20'>SL No.</td>
                                <td className='p-2 w-28'>Image</td>
                                <td className='p-2'>Product</td>
                                <td className='p-2'>Qantity</td>
                                <td className='p-2'>Unit Price</td>
                                <td className='p-2'>Total Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartDetails.map(product => <AddCardItems key={product?._id} product={product} removeItems={removeItems}> </AddCardItems>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                : null
            }


            {/* Customer Information  */}
            <div className='container row mx-auto my-5 pt-5 pb-5'>
                <section className='col-lg-6  my-4 mx-auto form-design text-center'>
                    <h3 className='text-light text-black text-center text-3xl mb-4 fw-bold'> Provide Your Information:</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='w-75' {...register("firstName")} value={user.displayName} /> <br />
                        <input className='w-75' type='email' {...register("email")} value={user.email} /> <br />
                        <input className='w-75' type='date' {...register("orderDate")} /> <br />
                        <input className='w-75' placeholder='Phone Number' type='number' {...register("phone")} /> <br />
                        <input className='w-75' placeholder='Address' type='address' {...register("address")} /> <br />
                        <input className='w-25 mt-4  text-lg ' type="submit" to="/mybooking" />
                    </form>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default PlaceOrder;