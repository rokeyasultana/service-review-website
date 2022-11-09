import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceDetails = () => {
    const service = useLoaderData();
    const {  _id, img, price, title, description } = service;

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
    <p>Price: ${price}</p>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default ServiceDetails;