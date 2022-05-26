import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Product from './Product';


const Products = () => {


    const { isLoading, error, data } = useQuery('products', () =>
        fetch('products.json').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const products = data.slice(0, 6)

    return (
        <div className='bg-accent py-24 rounded-t-2xl mt-5'>

            <div className='grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-5  justify-items-center'>
                {

                    products?.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>


        </div>
    );
};

export default Products;