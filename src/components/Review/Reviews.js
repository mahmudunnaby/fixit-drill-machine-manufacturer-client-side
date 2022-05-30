import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Review from './Review';

const Reviews = () => {


    const { isLoading, error, data } = useQuery('reviews', () =>
        fetch('https://mysterious-citadel-05250.herokuapp.com/review').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-2  justify-items-center py-10 bg-accent'>
            {
                data.map(review => <Review key={review._id} review={review} ></Review>)
            }
        </div>
    );
};

export default Reviews;