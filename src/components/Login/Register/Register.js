import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        emailPassError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";



    let signInError
    if (emailPassError || error || googleError) {

        signInError = <p className=' text-red-600'>{error?.message || googleError?.message || emailPassError?.message}</p>

    }

    if (updating || loading || googleLoading) {
        return <Loading></Loading>
    }
    const onSubmit = async data => {


        // console.log(data)

        await createUserWithEmailAndPassword(data?.email, data?.password)


        await updateProfile({ displayName: data?.displayName })
        alert('Updated profile')



    }



    if (user || googleUser) {
        navigate(from, { replace: true });

    }

    return (
        <div>




            <div className="flex flex-col w-full bg-accent  pb-40">
                <div className="grid h-auto card  mt-10 mx-5 p-6 rounded-box place-items-center">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your name?</span>

                            </label>
                            <input

                                {...register("displayName", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                    pattern: {
                                        value: 2,
                                        message: 'Please provide a valid name'
                                    }
                                })}
                                type="displayName" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.text?.type === 'required' && <span className="label-text-alt text-red-600">{errors.text.message}</span>}
                                {errors.text?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.text.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your Email?</span>

                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: 'Please provide a valid email'
                                }
                            })}
                                type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                {errors?.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                {errors?.email?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your Password?</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Min 6 characters or longer'
                                    }
                                })}
                                type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn' type="submit" value='REGISTER' />
                        {signInError}
                    </form>

                    <label className="label">
                        <span className="label-text-alt">Already Registered? <Link className='text-white' to='/login'>Please Login.</Link > </span>
                    </label>
                </div>

                <div className="divider-vertical mb-16"> OR </div>
                <div className="grid h-20 card  bg-accent rounded-box place-items-center">

                    <button onClick={() => signInWithGoogle()} className="btn gap-2 px-32 mb-24">
                        Google Login
                        <FcGoogle></FcGoogle>
                    </button>
                    <ToastContainer />
                </div>
            </div>





        </div>
    );
};

export default Register;