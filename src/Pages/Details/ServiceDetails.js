import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceDetails = () => {
    const service = useLoaderData();
    const {  _id, img, price, title, description,ratings } = service;

    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
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
        </div>
    );
};

export default ServiceDetails;