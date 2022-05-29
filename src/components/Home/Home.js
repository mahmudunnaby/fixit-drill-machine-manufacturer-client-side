import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Faq from '../Faq/Faq';
import NewArived from '../NewArived/NewArived';
import Products from '../Products/Products';
import Reviews from '../Review/Reviews';



const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <NewArived></NewArived>
            <Products></Products>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;