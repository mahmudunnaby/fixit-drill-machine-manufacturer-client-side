import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    const navigateToPayment = (id) => {
        navigate(`/payment/${id}`)
    }
    const query = user.email
    console.log(query);
    const { isLoading, error, data: orders } = useQuery('orders', () =>
        fetch(`https://mysterious-citadel-05250.herokuapp.com/purchase/${query}`).then(res =>
            res.json()
        )
    )



    if (isLoading || loading) {
        return <Loading></Loading>
    }


    console.log(orders);

    return (
        <div className="overflow-x-auto m-10">
            <table className="table w-full">

                <thead className=''>
                    <tr>


                        <th className=' bg-neutral text-white p-5'>Name</th>
                        <th className=' bg-neutral text-white p-5'>Order Quentity</th>
                        <th className=' bg-neutral text-white p-5'>Order By</th>
                        <th className=' bg-neutral text-white p-5'>Delivery</th>
                        <th className=' bg-neutral text-white p-5'>Payment</th>
                        <th className=' bg-neutral text-white p-5'>Action</th>

                    </tr>
                </thead>
                <tbody >

                    {
                        orders.map(order => {
                            return <tr key={order._id}>


                                <td className=' bg-warning'>{order.productName}</td>
                                <td className=' bg-warning'>{order.orderquentity}</td>
                                <td className=' bg-warning'>{order.user}</td>
                                <td className=' bg-warning'>{order.address}</td>
                                <td className=' bg-warning'><button onClick={() => navigateToPayment(order._id)} className=' btn btn-xs btn-success'>Pay Now </button></td>
                                <td><button className=' btn btn-xs'>Cancel Order</button></td>

                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;