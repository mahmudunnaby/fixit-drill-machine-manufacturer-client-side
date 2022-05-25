import React from 'react';

const Blog = () => {
    return (
        <div className=' container mx-auto '>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5 ">
                <figure className='max-w-xs'><img src="https://i.ibb.co/ZcwhVd1/react.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5 ">
                <figure className='max-w-xs'><img src="https://i.ibb.co/ZcwhVd1/react.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5 ">
                <figure className='max-w-xs'><img src="https://i.ibb.co/ZcwhVd1/react.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5 ">
                <figure className='max-w-xs'><img src="https://i.ibb.co/ZcwhVd1/react.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5 ">
                <figure className='max-w-xs'><img src="https://i.ibb.co/ZcwhVd1/react.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5 ">
                <figure className='max-w-xs'><img src="https://i.ibb.co/ZcwhVd1/react.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>

    );
};

export default Blog;