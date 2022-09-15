import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [productsIsLoading, setProductsIsLoading] = useState(true)
    useEffect(() => {
        setProductsIsLoading(true)
        fetch('https://obscure-beyond-83290.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(()=> setProductsIsLoading(false))
    }, [])
    return [
        products,
        productsIsLoading
    ];
};

export default useProducts;