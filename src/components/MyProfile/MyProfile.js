import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const refName = useRef('');
    const refEducation = useRef('')
    const refLocation = useRef('')
    const refPhone = useRef(0)
    const refSocial = useRef('')



    if (loading) {
        return <Loading></Loading>
    }

    const handleMyProfile = (e) => {
        e.preventDefault()
        const name = refName.current.value
        const education = refEducation.current.value
        const location = refLocation.current.value
        const phone = refPhone.current.value
        const social = refSocial.current.value

        const profileUpdate =
        {
            name,
            education,
            location,
            phone,
            social
        }

        fetch(`http://localhost:5000/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profileUpdate)
        })
            .then(res => res.json())
            .then(data => toast.success('user updated'))

    }

    return (
        <div className="flex flex-col w-full bg-accent  py-6 ">
            <div className="grid h-auto card  mt-10 mx-5 p-6 rounded-box place-items-center">

                <form onSubmit={handleMyProfile}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Admin User</span>
                        </label>
                        <input disabled value={user.email} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input ref={refName} type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>

                        </label>
                        <input ref={refEducation} type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input ref={refLocation} type="text" placeholder="Image Link" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input ref={refPhone} type="number" placeholder="Quentity" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Linkedin</span>
                        </label>
                        <input ref={refSocial} type="text" placeholder="Min. Order" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <ToastContainer />


                    <button type='submit' className='btn btn-active mt-5'>Update</button>

                </form>
            </div>





        </div>
    );
};

export default MyProfile;