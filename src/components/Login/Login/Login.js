import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading'

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user || googleUser) {
        console.log(user || googleUser);
    }

    let signInError
    if (error || googleError) {

        signInError = <p className=' text-red-600'>{error?.message}</p>

    }

    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {

        console.log(data)

        signInWithEmailAndPassword(data?.email, data?.password)

    }

    return (
        <div>




            <div className="flex flex-col w-full bg-accent  pb-20">
                <div className="grid h-auto card  mt-10 mx-5 p-6 rounded-box place-items-center">

                    {/* react hook form & daisyUI */}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your Email?</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: 'Please provide a valid email'
                                    }
                                })}
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your password?</span>
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
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn' type="submit" value='SIGN IN' />
                        {signInError}
                    </form>
                    <label className="label grid grid-rows-2 ">
                        <span className="label-text-alt"><Link className='text-white' to='/register'>Forgot Password?</Link > </span>
                        <span className="label-text-alt">New at FIXIT? <Link className='text-white' to='/register'>Please Register.</Link > </span>
                    </label>
                </div>





                <div className="divider-vertical mb-16"> OR </div>
                <div className="grid h-20 card  bg-accent rounded-box place-items-center">

                    <button onClick={() => signInWithGoogle()} className="btn gap-2 px-32 mb-24">
                        Google Login
                        <FcGoogle></FcGoogle>
                    </button>

                </div>
            </div>





        </div>
    );
};

export default Login;