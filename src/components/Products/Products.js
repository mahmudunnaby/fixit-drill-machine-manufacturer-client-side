import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // const {  data,error, isFetched,isLoading } = useQuery('products', () =>
    //     fetch('http://localhost:5000/products').then(res =>
    //         res.json()
    //     )
    // )

    // if (isLoading || isFetched) {
    //     return <Loading></Loading>
    // }

    // let errormessagefeatch
    // if (error) {
    //     errormessagefeatch = <p>{error.message}</p>
    // }

    const productHome = products.slice([products.length - 6])
    // const productsHome = products.slice(0, 6)
    // console.log(products);
    return (
        <div className='bg-accent py-24 rounded-t-2xl mt-5'>

            <div className='grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-5  justify-items-center'>
                {

                    productHome?.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            {/* {errormessagefeatch} */}

        </div>
    );
};

export default Products;