import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const refProductName = useRef('')
    const refPrice = useRef(0)
    const refImg = useRef('')
    const refQuentity = useRef(0)
    const refMinOrder = useRef(0)
    const refDiscription = useRef('')

    if (loading) {
        return <Loading></Loading>
    }



    const handleAddProduct = (e) => {

        e.preventDefault()
        const productName = refProductName.current.value
        const price = refPrice.current.value
        const img = refImg.current.value
        const quentity = refQuentity.current.value
        const minOrder = refMinOrder.current.value
        const discription = refDiscription.current.value
        const email = user.email

        const newProduct = { email, productName, price, img, quentity, minOrder, discription }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)

                toast("Product Added")
            })


        console.log(newProduct);
    }




    return (


        <div className="flex flex-col w-full bg-accent  py-6 ">
            <div className="grid h-auto card  mt-10 mx-5 p-6 rounded-box place-items-center">

                <form onSubmit={handleAddProduct}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Admin User</span>
                        </label>
                        <input disabled value={user.email} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product name?</span>

                        </label>
                        <input ref={refProductName} type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Price?</span>

                        </label>
                        <input ref={refPrice} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input ref={refImg} type="text" placeholder="Image Link" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Quentity?</span>
                        </label>
                        <input ref={refQuentity} type="number" placeholder="Quentity" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order?</span>
                        </label>
                        <input ref={refMinOrder} type="number" placeholder="Min. Order" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Discription?</span>
                        </label>
                        <input ref={refDiscription} type="Text" placeholder="Discription" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <ToastContainer />


                    {admin && <button type='submit' className='btn btn-active mt-5'>Add Product</button>}

                </form>
            </div>





        </div>
    );
};

export default AddProduct;