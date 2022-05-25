import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Products></Products>
        </div>
    );
};

export default Home;