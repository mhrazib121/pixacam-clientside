import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useReview from '../../Hooks/useReview';
import ReviewCard from '../../Card/ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews] = useReview();
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div>
            <h1>dfjoidjlkgjfdjg</h1>
            <h2>Pause On Hover</h2>
            <Slider {...settings}>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </Slider>
        </div>
    );
};

export default Reviews;