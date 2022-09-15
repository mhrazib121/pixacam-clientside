import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useCardProducts from '../../Hooks/useCardProducts';
import './ProductCard.css'

const ProductCard = (props) => {
    const { user } = useAuth();
    let navigate = useNavigate();
    const { _id, img, productName, price } = props.product;
    const newPrice = price - (price * 10) / 100;
    const [cardDetails] = useCardProducts();
    const singlePdcInCard = cardDetails.find(product => product.cart._id === props.product._id);
    
    const addToCard = (id) => {
        // If users did't login yet
        if (!user?.email) {
            // Navigate to login
            navigate("/login", { replace: true });
        }
        // If product have already added to shoping card
        if (user?.email && singlePdcInCard) {
            const customAlert = document.getElementById('customAlert');
            document.getElementById('customAlert').style.display = 'block';
            const cardNotify = document.createElement('div');
            cardNotify.innerHTML = `
                <h4> ${productName} </h4>
                <h4>Already Added to Card </h4>
                `;
            customAlert.appendChild(cardNotify);

            setTimeout(() => {
                // Notification
                document.getElementById('customAlert').style.display = 'none';
                cardNotify.innerHTML = '';
            }, 2500);
        }

        // If the product did not add to shopping cart yet
        if (user?.email && !singlePdcInCard) {
            props.product.email = user.email;
            props.product.quantity = 1;
            props.product.newPrice = newPrice;
            const productDetails = { cart: props.product };
            console.log('add', productDetails);

            axios.post('https://obscure-beyond-83290.herokuapp.com/productscard', productDetails)
                .then(res => {
                    console.log('addto')
                    if (res.data.insertedId) {
                        const customAlert = document.getElementById('customAlert');
                        document.getElementById('customAlert').style.display = 'block';
                        const cardNotify = document.createElement('div');
                        cardNotify.innerHTML = `
                            <h4> ${productName} </h4>
                            <h4> Added to Card </h4>
                            `;
                        customAlert.appendChild(cardNotify);

                        setTimeout(() => {
                            // Notification
                            document.getElementById('customAlert').style.display = 'none';
                            cardNotify.innerHTML = '';
                            // window.location.reload(true);
                            navigate("/placeorder", { replace: true });
                        }, 1000);
                    }
                })
        }
        // Condition end
    }

    return (
        <div data-aos="zoom-in-down" data-aos-delay="500" data-aos-easing="ease-in-sine">
            <div className='card-design shadow-md my-3 mx-2 '>
                <div className='p-3'>
                    <img className='img-edit' src={img} alt="" />
                </div>
                <div className=''>
                    <Link to={`/${productName}/${_id}`}>
                        <h4 className='text-xl font-bold text-color my-2 mx-3'> {productName}</h4>
                    </Link>
                    <div className='pb-3 p-2 mx-3'>
                        <div className='flex items-center mb-2'>
                            <p className='text-xl text-color me-auto font-bold'>
                                ${newPrice}
                                <del className='text-sm text-gray-400 ms-auto font-bold'> ${price}</del>
                            </p>
                            <FontAwesomeIcon icon={faCartPlus} className="text-color text-xl me-2" onClick={() => addToCard(_id)}  />
                            
                            {/* <button className='btn-cart' onClick={() => addToCard(_id)} > Add to Card </button> */}
                        </div>
                        <div className='flex items-center'>
                            <Rating size="small" name="read-only" value="4" readOnly />
                            <p className='text-sm ms-2'>5 Ratings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;