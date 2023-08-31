import { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  const [isReviewLoading, setIsReviewLoading] = useState(false);
  useEffect(() => {
    setIsReviewLoading(true);
    fetch("http://localhost:5001/reviews")
      .then((res) => res.json())
      .then((data) => {
        setIsReviewLoading(false);
        setReviews(data);
      })
      .catch();
  }, []);
  return [reviews, isReviewLoading];
};

export default useReview;
