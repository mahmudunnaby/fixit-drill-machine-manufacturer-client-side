import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, quentity, picture, supplier, discription, minOrder } = product
    const navigate = useNavigate()

    const navigateToPurchase = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{discription}</p>
                    <div className="stats shadow">

                        <div className="stat bg-accent">
                            <div className="stat-title">{quentity} nos</div>
                            <div className="stat-value">{price}</div>
                            <div className="stat-title">Min.Order {minOrder}</div>

                        </div>

                    </div>
                    {/* <div className="card-actions">
                        <button onClick={() => navigateToPurchase(_id)} className="btn btn-active">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Product;