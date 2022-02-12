import React from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from '../../Card/ProductCard/ProductCard';
import useProducts from '../../Hooks/useProducts';
// import useProducts from '../../Hooks/useProducts';

const Products = () => {
    const {products} = useProducts();
    return (
        <div className="container">
            <h1 className='text-4xl font-bold text-center my-5'>Our <span className='text-color'>Products</span></h1>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => <ProductCard key={product.id} product={product} ></ProductCard>)
                }
            </Row>
        </div>
    );
};

export default Products;