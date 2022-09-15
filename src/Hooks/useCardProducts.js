import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useCardProducts = () => {
    const [cartDetails, setCartDetails] = useState([])
    const {user} = useAuth();
    useEffect(()=>{
        fetch('https://obscure-beyond-83290.herokuapp.com/productscard')
        .then(res=> res.json())
        .then(data=> {
            const myCart = data.filter(cart=> cart.cart.email === user.email);
            setCartDetails(myCart);
        })
    },[user.email])
    return [
        cartDetails,
    ];
};

export default useCardProducts;