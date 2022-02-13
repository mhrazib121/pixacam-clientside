import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews]=useState([])
    useEffect(() => {
        fetch('http://localhost:5001/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [
        reviews
    ];
};

export default useReview;