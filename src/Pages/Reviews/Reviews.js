import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import AllReviews from './AllReviews';

const Reviews = () => {
    useTitle('Reviews')
    const service = useLoaderData();
    const {  _id, price, title } = service;
    const { user } = useContext(AuthContext);
   
    const handlePlaceReview= event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const reviews = {
            service: _id,
            serviceName: title,
            price,
            serviceId: _id,
            customer: name,
            email,
            phone,
            message
        }

      

       fetch('https://service-review-server-sable.vercel.app/reviews',{
        method: 'POST',
        headers:{
            'content-type': 'application/json' 
        },
        body: JSON.stringify(reviews)
       })
            .then(res => res.json())
            .then(data => {
               console.log(data)
                if(data.acknowledged){
                    alert('Review added successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div >
             <div className='flex justify-center '>


<form className='w-2/4 ' onSubmit={ handlePlaceReview}>
              <h2 className="text-4xl mt-5 text-center">Service title: {title}</h2>
              <h4 className="text-3xl mt-5">Price: {price}</h4>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                  <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full mt-5  input-bordered" />
                  <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full mt-5 input-bordered" />
                  <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                  <input name="email" type="text" placeholder="Your email" defaultValue={user?.email}  className="input input-ghost w-full  input-bordered" readOnly />
              </div>
              <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-6 mb-6" placeholder="Your Message" required></textarea>
<div className='text-center mb-6'>
  
<input className='btn' type="submit" value="Give review" />
</div>

          </form>
   
        
</div>

        </div>
    );
};

export default Reviews;