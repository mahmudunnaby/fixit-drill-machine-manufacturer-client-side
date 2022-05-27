import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Faq from '../Faq/Faq';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import NewArived from '../NewArived/NewArived';
import Products from '../Products/Products';
import Purchase from '../Purchase/Purchase';
import Reviews from '../Review/Reviews';



const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <NewArived></NewArived>
            <Products></Products>
            <AddProduct></AddProduct>
            <MyOrders></MyOrders>
            <ManageAllOrders></ManageAllOrders>
            <AddReview></AddReview>
            <Reviews></Reviews>
            <Faq></Faq>
            <Purchase></Purchase>

        </div>
    );
};

export default Home;