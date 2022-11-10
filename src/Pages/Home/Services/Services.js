import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Service from './Service';

const Services = () => {
   
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://service-review-server-sable.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-3xl text-sky-500 font-semibold mt-5 mb-5">Services</p>
              
            </div>
            <div className='grid justify-items-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>).slice(0,3)
                }
            </div>

            <div className='text-center mx-auto'>
          <Link to='/services'>
          <button class="btn btn-outline btn-info">See all services</button>
          
          </Link>
            </div>
        </div>
    );
};

export default Services;