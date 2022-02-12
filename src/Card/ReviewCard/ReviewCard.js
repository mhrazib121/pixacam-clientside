import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ReviewCard = (props) => {
    const {img, serviceName, fee} = props.review;
    
    return (
        <div>
            <div className='card-design'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h4 className='text-color text-center'> {serviceName}</h4>
                    <p> Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat maiores sapiente maxime harum, dolorum molestias?</p>
                    <div>
                        <button className='btn-all'>Buy Now</button>
                        <p>{fee}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;