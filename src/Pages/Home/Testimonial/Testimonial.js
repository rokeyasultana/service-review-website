import React from 'react';
import './Testimonial.css'
const Testimonial = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1500" id='bg' className='mb-15 grid justify-items-center '>
            
          <div>
            
        <div data-aos="fade-up" data-aos-duration="1500" className= 'bg-cyan-400   w-4/5 py-2 px-2 mt-28 bg-opacity-40 mb-40 ml-10 mr-10'>

<h2 className='mt-5 text-center text-3xl font-semibold text-white '>Best tour service provider,excellent vacation</h2>
<p  className='mt-5 text-center text-white '>Good things come to those who travel</p>
<p  className=' text-center  text-white '>& good travel experiences comes to those who get a tour guide.</p>

<div class="avatar flex justify-center items-center mt-5">
  <div class="w-24 rounded-full ">
    <img src="https://st2.depositphotos.com/2501951/7446/i/600/depositphotos_74467993-stock-photo-the-tourist-near-the-acropolis.jpg" />
  </div>
</div>

<div>
    <h2 className='text-center  text-xl text-white '>"Alexa Ann"</h2>
    <p className='text-center text-white'> (Tourist Guide)</p>
</div>
        </div>
            </div>  
        </div>
    );
};

export default Testimonial;