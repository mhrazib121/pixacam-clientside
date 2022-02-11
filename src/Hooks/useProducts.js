import React, { useState } from 'react';

const useProducts = () => {
    const [products, setProducts]=useState([])
    fetch('data.JSON')
    .then(res=> res.json())
    .then(data=>setProducts(data))
    return {
        products
    };
};

export default useProducts;