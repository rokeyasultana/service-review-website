import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

import TopBanner from './TopBanner';



const Home = () => {
    return (
        <div>
        <Helmet>
        <title>Home</title>
        </Helmet>
    <TopBanner></TopBanner>
    <Services></Services>
    <Testimonial></Testimonial>
     
        </div>
    );
};

export default Home;