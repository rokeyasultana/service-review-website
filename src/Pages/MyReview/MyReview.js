import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Pages/Contexts/AuthProvider/AuthProvider'
import MyReviewRow from './MyReviewRow';
const MyReview = () => {
    useTitle('My Review')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://service-review-server-rokeyasultana.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data =>  setReviews(data))
    }, [user?.email])
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if(proceed){
            fetch(`https://service-review-server-rokeyasultana.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = reviews.filter(odr => odr._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://service-review-server-rokeyasultana.vercel.app/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = reviews.filter(odr => odr._id !== id);
                const approving = reviews.find(odr => odr._id === id);
                approving.status = 'Approved'

                const newReview = [approving, ...remaining];
                setReviews( newReview );
            }
        })
    }

    return (
        <div>
               <h2 className="text-5xl">You have {reviews.length} Orders</h2>
            <div className="grid justify-items-center gap-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 ">
              
                        {
                            reviews.map(review => <MyReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></MyReviewRow>)
                        }
                    
            </div>
    
        </div>
    );
};

export default MyReview;