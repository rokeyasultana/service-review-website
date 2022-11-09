import React from 'react';

const Service = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full' style={{height: "250px"}} src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p >{description.slice(0,100)} ...</p>
                <div className="card-actions justify-end">
                    
                        <div className='text-center mx-auto'>
                        <button className="btn btn-outline btn-info">Read more</button>
                  
                        </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Service;