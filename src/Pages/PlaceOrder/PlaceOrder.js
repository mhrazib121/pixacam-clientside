import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddCardItems from '../../Card/AddCardItems/AddCardItems';
import useAuth from '../../Hooks/useAuth';
import useCardProducts from '../../Hooks/useCardProducts';
// import useProducts from '../../Hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [cartDetails] = useCardProducts();
    const location = useLocation();
    const navigate = useNavigate();

    const redirect_url = location.state?.from || '/dashboard/dashboard/myorder';

    const onSubmit = data => {
        data.status = 'Pending';

        axios.post('https://obscure-beyond-83290.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Placing order successfully');
                    reset();
                    navigate(redirect_url);
                }
            })
    }
    return (
        <div>
            <Header />

            { cartDetails.length ?
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
                            cartDetails.map(product => <AddCardItems key={product?._id} product={product}> </AddCardItems>
                            )
                        }
                    </tbody>
                </table>
            </div>
            : null
            }


            <div className='container row mx-auto my-5 pt-5 pb-5'>
                {/* <section className="col-lg-6 my-4  ">
                    <h3 > Package Name: {productData?.productName}  </h3>
                    <img className="w-50 my-3" src={productData?.img} alt="" />
                    <p > Details: {productData?.description} </p>
                    <h4 > Package Price: $ {productData?.price} </h4>
                </section> */}
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