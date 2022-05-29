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
        <div className="flex flex-col w-full  ">
            <div className="grid h-auto card    rounded-box place-items-center">

                <form className='bg-accent p-16 drop-shadow-2xl rounded-lg' onSubmit={handleMyProfile}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input ref={refName} disabled value={user.displayName} type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input disabled value={user.email} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>

                        </label>
                        <input ref={refEducation} type="text" placeholder="Education" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input ref={refLocation} type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input ref={refPhone} type="number" placeholder="Phone" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Linkedin</span>
                        </label>
                        <input ref={refSocial} type="text" placeholder="Linkedin link" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <ToastContainer />


                    <button type='submit' className='btn btn-active mt-5'>Update</button>

                </form>
            </div>





        </div>
    );
};

export default MyProfile;