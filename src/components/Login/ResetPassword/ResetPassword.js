import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';


const ResetPassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const onSubmit = async data => {
        await sendPasswordResetEmail(data?.email)

    }

    if (sending) {
        toast('Email sent')


    }
    return (
        <div className="flex flex-col w-full bg-accent  pb-20">
            <div className="grid h-auto card  mt-10 mx-5 py-32 rounded-box place-items-center">
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
                        <ToastContainer />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                        </label>
                        <input className='btn' type="submit" value='RESET' />

                    </div>

                </form>
            </div></div>
    );
};

export default ResetPassword;