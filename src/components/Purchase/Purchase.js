import React from 'react';
import { Link } from 'react-router-dom';

const Purchase = () => {
    return (
        <div className="hero min-h-screen bg-neutral container mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img className="md:max-w-xl sm:max-w-xs rounded-lg shadow-2xl" src="https://i.ibb.co/x5PNr62/drillling.jpg" />
                <div>
                    <h1 className="text-6xl font-bold text-warning">FIX</h1>

                    <div className="grid h-auto card  mt-10 ml-5 mx-5 px-20 rounded-box place-items-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">User</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Address</span>
                            </label>
                            <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Phone Number</span>
                            </label>
                            <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Purchase Quantity</span>
                            </label>
                            <input type="number" placeholder="Purchase quantity" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <Link className='btn btn-warning mt-5' to=''>Place Order</Link>
                </div>
            </div>
        </div>
    );
};

export default Purchase;