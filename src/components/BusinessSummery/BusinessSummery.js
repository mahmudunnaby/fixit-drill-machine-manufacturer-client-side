import React from 'react';
import { BeakerIcon, MailIcon, TrendingUpIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/solid'

const BusinessSummery = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow bg-warning my-5">

            <div className="stat">
                <UserGroupIcon className="h-8 w-8 ml-8 text-white"></UserGroupIcon>
                <div className="stat-title">Customers</div>
                <div className="stat-value">50+</div>
            </div>

            <div className="stat">
                <TrendingUpIcon className="h-8 w-8 ml-8 text-white"></TrendingUpIcon>
                <div className="stat-title">Revenue</div>
                <div className="stat-value">100M</div>


            </div>

            <div className="stat">
                <TruckIcon className="h-8 w-8 ml-5 text-white"></TruckIcon>
                <div className="stat-title">Products</div>
                <div className="stat-value">50+</div>
            </div>
            <div className="stat">
                <MailIcon className="h-8 w-8 ml-8 text-white"></MailIcon>
                <div className="stat-title">Reviews</div>
                <div className="stat-value">1,200</div>
            </div>

        </div>
    );
};

export default BusinessSummery;