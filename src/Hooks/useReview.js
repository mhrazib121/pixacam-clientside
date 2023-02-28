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
            .catch(
                console.log("Error")
            )
    }, [])
    return [
        reviews,
        isReviewLoading
    ];
};

export default useReview;