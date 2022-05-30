import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const ManageAllOrders = () => {
    const { isLoading, error, data: manageallorders } = useQuery('manageallorders', () =>
        fetch('https://mysterious-citadel-05250.herokuapp.com/purchase').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto m-10">
            <table className="table w-full">

                <thead className=''>
                    <tr>


                        <th className=' bg-neutral text-white p-5'>Product Name</th>
                        <th className=' bg-neutral text-white p-5'>Order By</th>
                        <th className=' bg-neutral text-white p-5'>Order Quentity</th>
                        <th className=' bg-neutral text-white p-5'>Delivery</th>
                        <th className=' bg-neutral text-white p-5'>Phone</th>
                        <th className=' bg-neutral text-white p-5 '>Email</th>
                    </tr>
                </thead>
                <tbody >

                    {
                        manageallorders.map(order => {
                            return <tr key={order._id}>


                                <td className=' bg-warning'>{order.productName}</td>
                                <td className=' bg-warning'>{order.user}</td>
                                <td className=' bg-warning'>{order.orderquentity}</td>
                                <td className=' bg-warning'>{order.address}</td>
                                <td className=' bg-warning'>{order.Phone}</td>
                                <td className=' bg-warning'>{order.email}</td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;