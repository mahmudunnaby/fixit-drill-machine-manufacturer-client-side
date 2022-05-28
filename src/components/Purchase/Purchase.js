import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {
    const { id } = useParams()
    const [user, loading] = useAuthState(auth);
    // const { register, formState: { errors }, handleSubmit } = useForm();

    const refUser = useRef('')
    const refEmail = useRef('')
    const refAddress = useRef('')
    const refPhone = useRef('')
    const refQuentity = useRef('')

    const { isLoading, error, data } = useQuery('product', () =>
        fetch(`http://localhost:5000/products/${id}`).then(res =>
            res.json()
        )
    )

    if (isLoading || loading) {
        return <Loading></Loading>
    }


    const handleSubmit = e => {
        e.preventDefault();

        const user = refUser.current.value
        const email = refEmail.current.value
        const address = refAddress.current.value
        const Phone = refPhone.current.value
        const orderquentity = refQuentity.current.value

        const minOrder = parseInt(data.minOrder)
        const maxOrder = parseInt(data.quentity)
        const productID = data._id
        const productName = data.name

        // console.log(minOrder, typeof (data.minOrder));

        if (orderquentity > minOrder && orderquentity <= maxOrder) {

            const orderData = { user, email, address, Phone, orderquentity, productID, productName }

            toast.success('Order Placed')

            fetch('http://localhost:5000/purchase', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data, 'data posted');
                })





        }
        else { return toast.error(`Must be more than ${minOrder} and  less than ${maxOrder}`) }



    }


    return (
        <div className="hero min-h-screen bg-neutral container mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img className="md:max-w-xl sm:max-w-xs rounded-lg shadow-2xl" src={data.picture} />
                <div>
                    <h1 className="text-6xl font-bold text-warning">{data.name}</h1>

                    <div className="grid h-auto card  mt-10 ml-5 mx-5 px-20 rounded-box place-items-center">


                        <form onSubmit={handleSubmit}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">User</span>
                                </label>
                                <input
                                    ref={refUser}
                                    disabled name='user' value={user?.displayName} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    ref={refEmail}
                                    disabled name='email' value={user.email} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">Address</span>
                                </label>
                                <input
                                    ref={refAddress}
                                    type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">Phone Number</span>
                                </label>
                                <input
                                    ref={refPhone}
                                    name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white">Purchase Quantity</span>
                                </label>
                                <input
                                    ref={refQuentity}
                                    type="number" name='quentity' placeholder="Purchase quentity" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <input className='btn btn-warning mt-5' type="submit" value='PLACE ORDER' />
                            <ToastContainer />
                        </form>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Purchase;