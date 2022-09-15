import React, { useState } from 'react';

const AddCardItems = (props) => {
    console.log(props.product._id)
    const { id, img, productName, price, quantity } = props.product.cart;
    const [unit, setUnit] = useState(quantity);

    // Quantity Increase 
    const quantityIncrease = () => {
        setUnit(unit + 1)
    }
    // Quantity Decrease 
    const quantityDecrease = () => {
        if (unit > 1) {
            setUnit(unit - 1)
        }
        else (
            console.log('Quantity amount have to positive number')
        )
    }
    // Total Price 
    const totalPrice = price * unit;

    return (
        <tr className="text-center fw-light">
            <td className='p-2 text-wrap'>{id}</td>
            <td className='p-2'><img className='img-fluid' src={img} alt="" /></td>
            <td className='p-2'>{productName} <br />
                <span className='text-red-600' onClick={() =>props?.removeItems(props.product._id)}> Remove Item</span>
            </td>
            <td className='p-2 m-5'>
                <button className='text-3xl mx-3' onClick={quantityDecrease}>-</button>
                {unit}
                <button className='text-3xl mx-3' onClick={quantityIncrease}>+</button>
            </td>
            <td className='p-2'>{price}</td>
            <td className='p-2'>{totalPrice}</td>
        </tr>
    );
};

export default AddCardItems;