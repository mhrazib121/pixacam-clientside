import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [productsIsLoading, setProductsIsLoading] = useState(true);
    useEffect(() => {
        setProductsIsLoading(true);
        fetch('https://pixacam-serverside-mhrazib121.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setProductsIsLoading(false);
            })
    }, [])
    return [
        products,
        productsIsLoading
    ];
};

export default useProducts;