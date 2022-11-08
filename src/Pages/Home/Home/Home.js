import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../Slider/Slider'
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
        <Helmet>
        <title>Home</title>
        </Helmet>
            <Slider></Slider>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;