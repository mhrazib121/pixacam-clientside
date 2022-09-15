import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { faArrowRightArrowLeft, faAward, faTruck, faUserShield } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import Reviews from '../Reviews/Reviews';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../../Card/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import canon from '../../images/brand-logo/Canon-Logo.png'
import nikon from '../../images/brand-logo/nikon-logo.png'
import philips from '../../images/brand-logo/philips-logo.png'
import samasung from '../../images/brand-logo/samasung-logo.png'
import panasonic from '../../images/brand-logo/panasonic-logo.png'
import offerBanner6 from '../../images/banner-6.png'
import offerBanner7 from '../../images/banner-7.png'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import AddToCard from '../../Notify/AddToCard/AddToCard';

const Home = () => {
    const [products, productsIsLoading] = useProducts();
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    if (productsIsLoading) {
        return (
            <Stack sx={{ color: '#FF4A17', justifyContent: 'center', marginTop: '350px', }} direction="row">
                <CircularProgress size={80} color="inherit" />
            </Stack>
        )
    }
    return (
        <div>
            <Header />

            {/* Top Banner */}
            <div className='top-section top-banner'>
                <h1 className='md:text-6xl sm:text-sm text-white text-center '>
                    Capture Your <br /> <span className='text-color'> Beautyfull Moments </span>
                </h1>
                <p className=' md:text-xl sm:text-sm text-white text-center mt-3'> PixaCam is modern camera selling company in the world. We sell brand new and latest camera at a reasonable price. </p>
                <div className='flex justify-center p-12'>
                    <Button className='explore-btn '> Explore Now</Button>
                </div>
            </div>

            {/* Popular Brand */}

            <div className='mb-5 container'>
                <h1 className='text-2xl font-bold text-center mt-5'>POPULAR <span className='text-color'>BRANDS</span></h1>
                <Slider {...settings} className=" container md:gap-2 flex justufy-center brnad">
                    <div className=' p-3  '>
                        <img className='ms-auto me-auto' src={canon} alt="fdg" />
                    </div>
                    <div className=' p-3'>
                        <img className='ms-auto me-auto' src={nikon} alt="dfg" />
                    </div>
                    <div className='p-3'>
                        <img className='ms-auto me-auto' src={panasonic} alt="dfg" />
                    </div>
                    <div className='p-3'>
                        <img className='ms-auto me-auto' src={samasung} alt="dfg" />
                    </div>
                    <div className='p-3'>
                        <img className='ms-auto me-auto' src={philips} alt="dfg" />
                    </div>
                </Slider>
            </div>

            {/* Products Section */}

            <div className=" my-5">
                <h1 className='text-4xl font-bold text-center uppercase'>Featured <span className='text-color'>Products</span></h1>
                <h3 className='text-xl font-bold text-center mt-2 mb-5'>Select your best choice <span className='text-color'></span></h3>
                <div className="sm:grid md:grid-cols-4 my-4 md:gap- grid-cols-2 sm:gap-1 justufy-center container ">

                    {
                        products.slice(0, 8).map(product => <ProductCard key={product._id} product={product} ></ProductCard>)
                    }
                </div>
                <Link className='text-color link-d flex justify-end text-lg pe-4 ms-auto' to={`/products`}> More Products</Link>
            </div>


            {/* Feature  */}


            <div className='my-5'>
                <hr />
                <div className="sm:grid md:grid-cols-4 my-4 md:gap-4 grid-cols-2 sm:gap-1 justufy-center container">

                    <div className='text-base flex items-center my-4  '>
                        <span className='text-5xl text-color'>{<FontAwesomeIcon icon={faTruck} />}</span>
                        <div className='mx-3'>
                            <h3 className='text-xl font-bold text-color'>Free Shipping</h3>
                            <p className='text-base'>Place your order anytime to get at your door</p>
                        </div>
                    </div>
                    <div className='text-base flex items-center my-4  '>
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
            </div>

            {/* Offer Section */}
            <div className='md:flex md:gap-5 my-5 offer-section containe'>
                <div className='w-50 me-auto ms-auto offer' >
                    <img src={offerBanner6} alt="" />
                </div>
                <div className='w-50 me-auto ms-auto  offer '>
                    <img src={offerBanner7} alt="" />
                </div>
            </div>

            {/* Reviews Section  */}
            <div>
                <Reviews />
            </div>
            
            {/* Alert  */}
            <AddToCard></AddToCard>
            <Footer />
        </div>
    );
};

export default Home;