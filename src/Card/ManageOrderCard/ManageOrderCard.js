import React from 'react';

const ManageOrderCard = (props) => {
    return (
        <div>
            <div className='card-design shadow-2xl m-3'>
                <div className='p-3'>
                    <img className='img-edit' src={props?.order?.product?.img} alt="" />
                </div>
                <div className='p-3'>
                    <h4 className='text-xl font-bold text-color my-2 text-center'> {props?.order?.product?.productName}</h4>
                    <p className='p-2'> Customer Name: {props?.order?.firstName}</p>
                    <p className='p-2'> Order Date: {props?.order?.orderDate}</p>
                    <p className='p-2'> Status: {props?.order?.status}</p>
                    <div className='flex items-center'>
                        <button className='btn-all' onClick={() => props.cancelOrder(props?.order?._id)}> Cancel </button>
                        <button className='btn-all ms-auto' onClick={() => props.updateOrderStatus(props?.order?._id)}> Update </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrderCard;