
import React from 'react';
import useTitle from '../../hooks/useTitle';
import Offer from './Offer';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import TopBanner from './TopBanner';



const Home = () => {
    
    useTitle('Home')
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