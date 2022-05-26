import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Products></Products>
            <AddProduct></AddProduct>
            <MyOrders></MyOrders>
            <ManageAllOrders></ManageAllOrders>
        </div>
    );
};

export default Home;