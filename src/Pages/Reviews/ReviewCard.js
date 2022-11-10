import React from 'react';

const ReviewCard = ({review}) => {
    const { service, customer  } = review;
    return (
        <div>
              <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{service}</h2>
    <p>{customer}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReviewCard;