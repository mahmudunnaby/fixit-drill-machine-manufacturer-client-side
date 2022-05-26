import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>




            <div className="flex flex-col w-full bg-accent  pb-40">
                <div className="grid h-auto card  mt-10 mx-5 p-6 rounded-box place-items-center">


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your Email?</span>

                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <label className="label">

                            <span className="label-text-alt">Alt label</span>
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your password?</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt"><Link className='text-white' to='/register'>Forgot Password?</Link > </span>
                            <span className="label-text-alt">New at FIXIT? <Link className='text-white' to='/register'>Please Register.</Link > </span>
                        </label>
                    </div>

                </div>

                <div className="divider-vertical mb-16"> OR </div>
                <div className="grid h-20 card  bg-accent rounded-box place-items-center">

                    <button className="btn gap-2 px-32 mb-24">
                        Google Login
                        <FcGoogle></FcGoogle>
                    </button>

                </div>
            </div>





        </div>
    );
};

export default Login;