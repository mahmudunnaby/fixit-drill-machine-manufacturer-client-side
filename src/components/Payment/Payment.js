import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams()
    return (
        <div className='  flex bg-warning justify-items-center align-middle'>
            <div className="card m-6 w-96 p-32 glass items-center text-center  ">
                <div className="card-body items-center text-center ">
                    <h1 className="card-title">Processing for Payment ID: {id}</h1>
                </div>

            </div>
        </div>

    );
};

export default Payment;