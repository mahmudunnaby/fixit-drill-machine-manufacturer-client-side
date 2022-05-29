import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {

    const refReviewText = useRef('')
    const refEmail = useRef('')
    const [user, loading] = useAuthState(auth);

    const [rating, setRating] = useState(1)
    // const [checked, setChecked] = useState(false)

    const handleInputRatings = (value) => {
        setRating(value);


    }

    const handleAddReview = (e) => {
        e.preventDefault()
        const email = refEmail.current.value
        const reviewText = refReviewText.current.value
        const usersRating = parseInt(rating)

        const review = { email, reviewText, usersRating }

        console.log(review);

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(review, 'review posted');
            })


        toast.success('Thanks for the Review')

    }

    return (
        <div >

            <div className="flex flex-col w-full bg-accent rounded-lg  pb-40">
                <div className="grid h-auto card  mt-10 mx-5 p-6 rounded-box place-items-center">

                    <form onSubmit={handleAddReview}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">User</span>
                            </label>
                            <input ref={refEmail} disabled type="text" placeholder="Email" value={user?.email} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <input ref={refReviewText} required type="text" placeholder="Review" className="input input-bordered w-full py-9 max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <button className="btn btn-active mt-5">Add Review</button>
                        </div>
                        <ToastContainer />
                    </form>


                </div>
                <div className="rating mt-3 justify-center">
                    <input onClick={() => handleInputRatings(1)} type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                    <input onClick={() => handleInputRatings(2)} type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                    <input onClick={() => handleInputRatings(3)} type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                    <input onClick={() => handleInputRatings(4)} type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                    <input onClick={() => handleInputRatings(5)} type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>





        </div>
    );
};

export default AddReview;