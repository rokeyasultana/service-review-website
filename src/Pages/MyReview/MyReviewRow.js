import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({ review, handleDelete, handleStatusUpdate}) => {

    const { _id, customer,serviceName,email,message   } = review;
   

    
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{serviceName}</h2>
    <p>{customer}</p>
    <p>{email}</p>
    <p>Review: {message }</p>
    <div class="text-center mx-auto gap-3">
     
     <Link  to={`/editReview/${_id}`}>
     <button  onClick={() => handleStatusUpdate(_id)} class="btn btn-info">Update</button>
     </Link>
    </div>
    
    <button onClick={() => handleDelete(_id)}  class="btn  mt-3">Delete</button>
  </div>
</div>
        </div>
    );
};

export default MyReviewRow;