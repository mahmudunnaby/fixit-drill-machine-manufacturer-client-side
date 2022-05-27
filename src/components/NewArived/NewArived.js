import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const NewArived = () => {
    const { isLoading, error, data } = useQuery('newproduct', () =>
        fetch('products.json').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const newArivedFirst = data[data.length - 1]
    const newArivedSecond = data[data.length - 2]

    const newProducts = data.slice([data.length - 3])
    // console.log(data[11 - 1]);
    // console.log(data[data.length - 1]);

    // console.log(newProducts);

    return (


        <div>
            {/* <h1 className=' text-2xl text-white bg-red-500 mx-96'>New arrival</h1> */}


            <div className="stats shadow">



                {
                    newProducts.map(newProduct => {
                        return <div key={newProduct._id} className="stat indicator">

                            <div className="avatar justify-center">
                                <span className="indicator-item badge badge-warning">New</span>
                                <div className="w-24 mask mask-squircle  ">
                                    <img src={newProduct.picture} />
                                </div>
                            </div>
                            <div className="stat-title">{newProduct.name}</div>
                            <div className="stat-value text-secondary">{newProduct.price}</div>
                            <div className="stat-desc">{newProduct.quentity > 0 && <p>On Stock</p> || <p>Stock Out</p>} </div>
                            <div className="card-actions  justify-center  mt-5">
                                <button className="btn  btn-warning">Buy Now</button>
                            </div>
                        </div>
                    })
                }





            </div>


        </div>





    );
};

export default NewArived;