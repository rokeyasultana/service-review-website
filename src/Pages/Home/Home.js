import React from 'react';
import { Helmet } from 'react-helmet-async';
import Offer from './Offer';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

import TopBanner from './TopBanner';



const Home = () => {
    return (
        <div>
        
    <TopBanner></TopBanner>
    <Services></Services>
    <Testimonial></Testimonial>
     <Offer></Offer>
        </div>
    );
};

export default Home;