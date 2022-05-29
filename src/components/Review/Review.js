import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const Review = ({ review }) => {
    const { email, reviewText, usersRating } = review

    return (
        <div className="card w-96 glass items-center text-center">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{email}</h2>
                <p>{reviewText}</p>
                <div className='' >
                    {
                        usersRating == 1 && <AiFillStar className='flex text-white'></AiFillStar>
                    }
                    {
                        usersRating == 2 && <div className='flex text-white'><AiFillStar></AiFillStar>  <AiFillStar></AiFillStar></div>
                    }
                    {
                        usersRating == 3 && <div className='flex text-white'><AiFillStar></AiFillStar>  <AiFillStar></AiFillStar> <AiFillStar></AiFillStar></div>
                    }
                    {
                        usersRating == 4 && <div className='flex text-white'><AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar></div>
                    }
                    {
                        usersRating == 5 && <div className='flex text-white'><AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar> <AiFillStar></AiFillStar></div>
                    }</div>


            </div>
        </div >
    );
};

export default Review;