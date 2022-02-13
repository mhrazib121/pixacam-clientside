import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://obscure-beyond-83290.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [
        reviews
    ];
};

export default useReview;