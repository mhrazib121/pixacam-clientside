import React, { useState } from 'react';

const useReview = () => {
    const [reviews, setReviews]=useState([])
    fetch('data.JSON')
    .then(res=> res.json())
    .then(data=> setReviews(data))
    return [
        reviews
    ];
};

export default useReview;