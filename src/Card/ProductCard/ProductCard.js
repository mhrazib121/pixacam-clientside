import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = (props) => {
    const {_id,id, img, productName, price } = props.product;
    console.log(_id)
    console.log(img)
    return (
        <div data-aos="zoom-in-down" data-aos-delay="500" data-aos-easing="ease-in-sine">
            <div className='card-design shadow-2xl m-3 '>
                <div className='p-3'>
                    <img className='img-edit' src={img} alt="" />
                </div>
                <div className=''>
                    <h4 className='text-xl font-bold text-color my-2 text-center'> {productName}</h4>
                    <p className='p-2 mx-3'> Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat maiores sapiente maxime harum, dolorum molestias?</p>
                    <div className='flex items-center  pb-3 p-2 mx-3'>
                        <button className='btn-all'> <Link className='link-d' to={`/placeorder/${_id}`}> Buy Now </Link> </button>
                        <p className='text-xl text-color ms-auto font-bold'> ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;