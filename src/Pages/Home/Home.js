import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { faArrowRightArrowLeft, faAward, faTruck, faUserShield } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import Reviews from '../Reviews/Reviews';
import Products from '../Products/Products';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../../Card/ProductCard/ProductCard';

const Home = () => {
    const [products]=useProducts()
    return (
        <div className=''>
            <Header/>
            <div className='top-section top-banner'>
                <h1 className='md:text-6xl sm:text-sm text-rose-500  text-center '>
                    Capture Your <br /> <span className='text-color'> Beautyfull Moments </span>
                </h1>
                <div className='flex justify-center p-12'>
                    <Button className='btn-all '> Explore Now</Button>
                </div>
            </div>

            {/* <Products/> */}

            <div className="container">
                <h1 className='text-4xl font-bold text-center my-5'>Our <span className='text-color'>Products</span></h1>
                <div className="sm:grid md:grid-cols-3 my-4 md:gap-4 grid-cols-2 sm:gap-1 justufy-center container">

                {
                        products.map(product => <ProductCard key={product._id} product={product} ></ProductCard>)
                    }
                </div>
            </div>

            {/* Feature  */}

            
            <hr />
            <div className="sm:grid md:grid-cols-4 my-4 md:gap-4 grid-cols-2 sm:gap-1 justufy-center container">
              
                <div className='text-base flex items-center my-4  '>
                    <span className='text-5xl text-color'>{ <FontAwesomeIcon icon={faTruck} />}</span>
                    <div className='mx-3'>
                        <h3 className='text-xl font-bold text-color'>Free Shipping</h3>
                    <p className='text-base'>Place your order anytime to get at your door</p>
                    </div>
                </div>
                <div  className='text-base flex items-center my-4  '>
                    <span className='text-5xl text-color'>{<FontAwesomeIcon icon={faAward} />}</span>
                    <div className='mx-3'>
                        <h3 className='text-xl font-bold text-color'> Quality Products</h3>
                        <p> We Deliver branded product allaways </p>
                    </div>
                </div>
                <div className='text-base flex items-center my-4  '>
                    <span className='text-5xl text-color'>{<FontAwesomeIcon icon={faUserShield} />}</span>
                   <div className='mx-3'>
                   <h3 className='text-xl font-bold text-color'> Secure Payment</h3>
                        <p>Our payment system is highly Confeidential</p>
                   </div>
                </div>
                <div className='text-base flex items-center my-4  '>
                    <span className='text-5xl text-color'>{<FontAwesomeIcon icon={faArrowRightArrowLeft} />}</span>
                    <div className='mx-3'>
                    <h3 className='text-xl font-bold text-color'> 5 Days return policy</h3>
                        <p> Easy to return your products </p>
                    </div>
                </div>
               
            </div>
            <hr />

            {/* Reviews Section  */}
            <div>
                <Reviews/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;