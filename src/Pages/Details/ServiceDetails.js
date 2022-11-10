import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

import useTitle from '../../hooks/useTitle';


const ServiceDetails = () => {
  useTitle('Service-Details')
    const service = useLoaderData();
    const {  _id, img, price, title, description,ratings } = service;
   

    return (
        <div className='grid justify-items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
           <div className="card mt-5 w-96 bg-base-100 shadow-xl mb-6">
           <PhotoProvider>
                <PhotoView src={img}>
                <figure><img className='w-full' style={{height: "250px"}} src={img} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className='text-sky-300'>Price: ${price}</p>
    <p className='text-sky-300'>Ratings: {ratings}</p>
    <p>{description}</p>
   
  </div>
</div> 

<div>
  <h2 className='text-center text-sky-300 text-3xl mt-5 mb-5'>Give a review</h2>
 <div className='text-center mx-auto'>
  <Link to={`/review/${_id}`}>
  <button class="btn btn-outline btn-info">Give a Review</button>
  </Link>

 </div>
 
</div>

        </div>
    );
};

export default ServiceDetails;