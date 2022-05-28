import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {
    const { id } = useParams()
    console.log(id);
    const [products, setProducts] = useState({})
    const [user, loading] = useAuthState(auth);

    const { isLoading, error, data } = useQuery('product', () =>
        fetch(`http://localhost:5000/products/${id}`).then(res =>
            res.json()
        )
    )


    if (isLoading || loading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     const url = `http://localhost:5000/products/${id}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [products])

    console.log(user);

    return (
        <div className="hero min-h-screen bg-neutral container mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img className="md:max-w-xl sm:max-w-xs rounded-lg shadow-2xl" src="https://i.ibb.co/x5PNr62/drillling.jpg" />
                <div>
                    <h1 className="text-6xl font-bold text-warning">{products.name} {data.name}</h1>

                    <div className="grid h-auto card  mt-10 ml-5 mx-5 px-20 rounded-box place-items-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">User</span>
                            </label>
                            <input value={user.displayName} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input disabled value={user.email} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
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