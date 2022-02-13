import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar, Rating } from '@mui/material';

const ReviewCard = (props) => {
    const { img, customerName, feedback, rating } = props.review;

    return (
        <div className='card-design shadow-2xl m-3 mb-5'>
            <div className='p-3 flex justify-center'>
                <Avatar
                    alt="Remy Sharp"
                    src={img}
                    sx={{ width: 85, height: 85 }}
                />
            </div>
            <div className='m-2'>
                <h4 className='text-color text-center p-2'> {customerName}</h4>
                <p className='text-center p-2'> {feedback}</p>
                <div className='flex justify-center p-2 pb-4'>
                <Rating  name="read-only" value={rating} readOnly />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;