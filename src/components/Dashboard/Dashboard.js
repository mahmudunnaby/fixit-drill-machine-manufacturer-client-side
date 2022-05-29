import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>

            <div className="drawer drawer-mobile ">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <h1 className=' text-2xl font-bold text-black'>DASHBOARD</h1>
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}


                </div>
                <div className="drawer-side">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-accent text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li> <Link to='/dashboard'>My Orders</Link> </li>
                        <li><Link to='/dashboard/addreview'>Add Review</Link> </li>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link> </li>
                        <li><Link to='/dashboard/manageallorders'>Manage All Orders</Link> </li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link> </li>
                        <li><Link to='/dashboard/makeadmin'>Make Admin</Link> </li>
                        <li><Link to='/dashboard/manageproduct'>Manage Product</Link> </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;