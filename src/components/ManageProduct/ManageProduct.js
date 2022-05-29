import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const ManageProduct = () => {
    const { isLoading, error, data: manageproducts } = useQuery('manageproducts', () =>
        fetch('http://localhost:5000/products').then(res =>
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

                        <th className=' bg-neutral text-white p-5'>Image</th>
                        <th className=' bg-neutral text-white p-5'>Name</th>
                        <th className=' bg-neutral text-white p-5'>Job</th>
                        <th className=' bg-neutral text-white p-5'>Favorite Color</th>
                    </tr>
                </thead>
                <tbody >

                    {
                        manageproducts.map(order => {
                            return <tr key={order._id}>

                                <td className=' bg-warning'> <div className="mask mask-squircle w-12 h-12  ">
                                    <img src={order.picture} alt="Avatar Tailwind CSS Component" />
                                </div> </td>
                                <td className=' bg-warning'>{order.name}</td>
                                <td className=' bg-warning'>Quality Control Specialist</td>
                                <td className=' bg-warning'>Blue</td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;