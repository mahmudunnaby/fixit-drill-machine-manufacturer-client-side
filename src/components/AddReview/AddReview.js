import React from 'react';

const AddReview = () => {

    const handleInputRatings = (value) => {
        console.log(value);
    }
    return (
        <div >

            <div className="flex flex-col w-full bg-accent  pb-40">
                <div className="grid h-auto card  mt-10 mx-5 p-6 rounded-box place-items-center">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">User</span>
                        </label>
                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <input type="text" placeholder="Review" className="input input-bordered w-full py-9 max-w-xs" />
                    </div>
                    <div onChange={handleInputRatings} className="rating mt-3">
                        <input onClick={() => handleInputRatings(1)} type="radio" name="rating-1" className="mask mask-star-2" />
                        <input onClick={() => handleInputRatings(2)} type="radio" name="rating-1" className="mask mask-star-2" />
                        <input onClick={() => handleInputRatings(3)} type="radio" name="rating-1" className="mask mask-star-2" />
                        <input onClick={() => handleInputRatings(4)} type="radio" name="rating-1" className="mask mask-star-2" />
                        <input onClick={() => handleInputRatings(5)} type="radio" name="rating-1" className="mask mask-star-2" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <button className="btn btn-active mt-5">Add Review</button>
                    </div>

                </div>

            </div>





        </div>
    );
};

export default AddReview;