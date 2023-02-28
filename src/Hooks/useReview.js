import { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([]);
    const [isReviewLoading, setIsReviewLoading] = useState(false);
    useEffect(() => {
        setIsReviewLoading(true);
        fetch('https://pixacam-serverside-mhrazib121.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setIsReviewLoading(false);
                setReviews(data);
            })
    }, [])
    return [
        reviews,
        isReviewLoading
    ];
};

export default useReview;