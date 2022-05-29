import React from 'react';

const AddProduct = () => {
    return (
        <div>

            <div className="flex flex-col w-full bg-accent  ">
                <div className="grid h-auto card  mt-10 mx-5 p-6 rounded-box place-items-center">


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Admin User</span>

                        </label>
                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product name?</span>

                        </label>
                        <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Price?</span>

                        </label>
                        <input type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" placeholder="Image Link" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Quentity?</span>
                        </label>
                        <input type="number" placeholder="Quentity" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Minimum Order?</span>
                        </label>
                        <input type="number" placeholder="Min. Order" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Product Discription?</span>
                        </label>
                        <input type="Text" placeholder="Discription" className="input input-bordered w-full max-w-xs" />

                        <button className="btn btn-active mt-5">Add Product</button>
                    </div>

                </div>

            </div>





        </div>
    );
};

export default AddProduct;