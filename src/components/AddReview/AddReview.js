import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {

    const refReviewText = useRef('')
    const refEmail = useRef('')
    const [user, loading] = useAuthState(auth);

    const [rating, setRating] = useState(0)

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





    }

    return (
        <div >

            <div className="flex flex-col w-full bg-accent  pb-40">
                <div className="grid h-auto card  mt-10 mx-5 p-6 rounded-box place-items-center">

                    <form onClick={handleAddReview} >
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
                            <input ref={refReviewText} type="text" placeholder="Review" className="input input-bordered w-full py-9 max-w-xs" />
                        </div>
                        <div className="rating mt-3">
                            <input onClick={() => handleInputRatings(1)} type="radio" name="rating-1" className="mask mask-star-2" />
                            <input onClick={() => handleInputRatings(2)} type="radio" name="rating-1" className="mask mask-star-2" />
                            <input onClick={() => handleInputRatings(3)} type="radio" name="rating-1" className="mask mask-star-2" />
                            <input onClick={() => handleInputRatings(4)} type="radio" name="rating-1" className="mask mask-star-2" />
                            <input onClick={() => handleInputRatings(5)} type="radio" name="rating-1" className="mask mask-star-2" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <button className="btn btn-active mt-5">Add Review</button>
                        </div>

                    </form>



                </div>

            </div>





        </div>
    );
};

export default AddReview;