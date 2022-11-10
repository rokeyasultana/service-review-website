import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect( () =>{
        fetch('https://service-review-server-sable.vercel.app/reviews')
        .then(res =>res.json())
        .then(data => setReviews(data))
    }, []);
    return (
        <div>
            {
                   reviews.map(review=> <ReviewCard
                        key={review._id}
                        service={review}
                    ></ReviewCard>)
                }
        </div>
    );
};

export default AllReviews;