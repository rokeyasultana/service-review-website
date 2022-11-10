import React, { useEffect, useState } from 'react';
import AllService from './AllService';
import useTitle from '../../hooks/useTitle';

const AllServices = () => {
    useTitle('Services')
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://service-review-server-sable.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='grid mt-10 mb-10 justify-items-center gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <AllService
                        key={service._id}
                        service={service}
                    ></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;