import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MakeAdmin = () => {
    const { isLoading, error, refetch, data: appUser } = useQuery('appUser', () =>
        fetch('http://localhost:5000/user').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed')

                }
                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch()

                    toast.success('user made')
                }

            }
            )



    }
    return (
        <div className="overflow-x-auto m-10">
            <table className="table w-full">

                <thead className=''>
                    <tr>


                        <th className=' bg-neutral text-white p-5'>User Name</th>
                        <th className=' bg-neutral text-white p-5'>Order By</th>
                        <th className=' bg-neutral text-white p-5'>Make Admin</th>
                        <th className=' bg-neutral text-white p-5'>Remove User</th>


                    </tr>
                </thead>
                <tbody >

                    {
                        appUser.map(user => {
                            return <tr key={user._id}>


                                <td className=' bg-warning'>{user.email}</td>
                                <td className=' bg-warning'>{user.user}</td>
                                <td>  {user.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} className=' btn btn-xs'>Make Admin</button>}</td>
                                <td><button className=' btn btn-xs'>Remove User</button></td>
                                <ToastContainer />
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;