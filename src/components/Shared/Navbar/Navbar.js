import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

import Loading from '../Loading/Loading';

const navItems = <>
    <li ><Link to='/home'>HOME</Link></li>
    <li><Link to='/blog'>BLOG</Link></li>
    <li><Link to='/myportfolio'>MY PORTFOLIO</Link></li>

</>
const Navbar = () => {

    const [user, loading] = useAuthState(auth);




    const logout = () => {
        signOut(auth)
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="navbar bg-accent font-semibold ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-secondary lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                        {user ? <li><Link to='/dashboard'>DASHBOARD</Link></li> : ''}
                    </ul>
                </div>
                <a className="btn btn-base-100 normal-case text-xl">FIX IT</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  p-0">
                    {
                        navItems
                    }
                    {user ? <li><Link to='/dashboard'>DASHBOARD</Link></li> : ''}
                </ul>
            </div>
            <div className="navbar-end">

                {user ? <button onClick={logout} className='btn'>SIGN OUT</button> : <Link className='btn' to='/login'>SIGN IN</Link>}

                {user ? <p className='px-3 font-bold text-lg'>{user.displayName}</p> : ''}
                <label tabindex="0" for="dashboard-sidebar" className="btn btn-secondary lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;