import React from 'react';
import './Offer.css'
const Offer = () => {
    return (
        <div  className='flex justify-center'>
            <div id='offer' className='border-2 border-sky-300 mt-5 mb-10 h-44 w-3/4'>
            <div class="indicator ml-20 ">
  <span class="indicator-item badge badge-info text-red-500  font-semibold mt-[-20px]">Offer</span> 
</div>
<h2 className='text-center text-3xl mt-5 text-sky-300 font-semibold'>Get <span className='text-red-500 text-4xl'> 5% </span> off for this winter season</h2>
<p className='text-center mt-5 text-sky-300 font-semibold'>Don't get let..!</p>
            </div>
        </div>
    );
};

export default Offer;