import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const query = user.email
    console.log(query);
    const { isLoading, error, data: orders } = useQuery('orders', () =>
        fetch(`http://localhost:5000/purchase/${query}`).then(res =>
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

                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;