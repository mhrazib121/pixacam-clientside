import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrderCard = (props) => {
    return (
        <div>
            <div className='card-design shadow-2xl m-3'>
                <div className='p-3'>
                    <img className='img-edit' src={props?.order?.product?.img} alt="" />
                </div>
                <div>
                    <h4 className='text-xl font-bold text-color my-2 text-center'> {props?.order?.product?.productName}</h4>
                    <p className='p-2'> Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat maiores sapiente maxime harum, dolorum molestias?</p>
                    <div className='flex items-center p-2'>
                        <button className='btn-all' onClick={() => props.cancelOrder(props?.order?._id)}> Cancel </button>
                        <p className='text-xl text-color ms-auto font-bold'> ${props?.order?.product?.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderCard;