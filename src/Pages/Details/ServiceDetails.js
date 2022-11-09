import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
  
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
  <div>
  <form >
                <h2 className="text-4xl mt-5 text-center">Service title: {title}</h2>
                <h4 className="text-3xl mt-5">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full mt-5  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full mt-5 input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email"   className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-6 mb-6" placeholder="Your Message" required></textarea>
<div className='text-center mb-6'>
    
<input className='btn' type="submit" value="Give review" />
</div>
            </form>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;