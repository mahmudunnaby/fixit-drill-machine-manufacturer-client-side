import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>

            <div className="drawer drawer-mobile ">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

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
                        {admin && <li><Link to='/dashboard/manageallorders'>Manage All Orders</Link> </li>}
                        {admin && <li><Link to='/dashboard/addproduct'>Add Product</Link> </li>}
                        {admin && <li><Link to='/dashboard/makeadmin'>Make Admin</Link> </li>}
                        {admin && <li><Link to='/dashboard/manageproduct'>Manage Product</Link> </li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;