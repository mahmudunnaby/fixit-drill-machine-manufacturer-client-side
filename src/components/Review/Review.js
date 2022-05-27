import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const Review = ({ review }) => {
    const { email, theReview, rating } = review

    return (
        <div className="card w-96 glass items-center text-center">
            <div className="card-body items-center text-center ">
                <h2 className="card-title">{email}</h2>
                <p>{theReview}</p>
                <div className='' >
                    {
                        rating == 1 && <AiFillStar className='flex text-white'></AiFillStar>
                    }
                    {
                        rating == 2 && <div className='flex text-white'><AiFillStar></AiFillStar>  <AiFillStar></AiFillStar></div>
                    }
                    {
                        rating == 3 && <div className='flex text-white'><AiFillStar></AiFillStar>  <AiFillStar></AiFillStar> <AiFillStar></AiFillStar></div>
                    }
                    {
                        rating == 4 && <div className='flex text-white'><AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar></div>
                    }
                    {
                        rating == 5 && <div className='flex text-white'><AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar></div>
                    }</div>


            </div>
        </div >
    );
};

export default Review;