import React from 'react';

const Blog = () => {
    return (
        <div className=' container mx-auto '>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5  ">
                <figure className='max-w-xs'><img src="https://i.ibb.co/ZcwhVd1/react.jpg" alt="Album" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <p>
                        In order to improve the performance of a React Application following strategies could be taken under consideration. <br>
                        </br>Memoizing React components to prevent unnecessary re-renders
                        <br></br>Splitting the code in React using dynamic Import feature
                        <br></br>Windowing or list virtualization in React such as pagination
                    </p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5">
                <figure className='max-w-xs'><img src="https://i.ibb.co/ZcwhVd1/react.jpg" alt="Album" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state  that needs to be properly managed in a react application
                        <ol >
                            <li>1.Local state.</li>
                            <li>2.Global state.</li>
                            <li>3.Server state.</li>
                            <li>4.URL state.</li>
                        </ol>
                    </p>

                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5 ">
                <figure className='max-w-xs'><img src="https://i.ibb.co/ZcwhVd1/react.jpg" alt="Album" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>This is the procress of inheriting another objects properties or methodes (functions) by an object.This is a process of reusing existing objects that serve as prototypes </p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-5 ">
                <figure className='max-w-xs'><img src="https://i.ibb.co/ZcwhVd1/react.jpg" alt="Album" /></figure>
                <div className="card-body text-left ">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p><strong>UNIT TESTING </strong> This is a type of teasting process of the individual units or components in  software devlopment. This  testing is done aiming to validate that each unit of the software code performs as expected. </p>
                    <p><strong>WHY UNIT TESTING? </strong>Unit tests helps the developer to get a good grasp on testing code base which enables to make changes quickly and to make the code reusable.Testing is vital for cost saving purpose as it helps to identify the bugs before deployment.</p>
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