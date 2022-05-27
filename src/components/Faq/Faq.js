import React from 'react';

const Faq = () => {
    return (
        <div className='grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-5  justify-items-center my-10 mx-10'>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-accent rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Our Refund Policy
                </div>
                <div className="collapse-content">
                    <p>You can ask cancel the added product anytime. In order to ensure the best quality we don't give any refund once the payment is complete</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-accent rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How Is The Product Quality?
                </div>
                <div className="collapse-content">
                    <p>We are yet to recive any complaint about our products. We have zero tolarance rules imposed in terms of quality</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-accent rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Can I Order Less Than The Min Quantity?
                </div>
                <div className="collapse-content">
                    <p>We respect our customers but less than the minimum quantity the buiness won't be viable considering our prmium quality we need to maintain some strict ruls in some aspects of buiness operation</p>
                </div>
            </div>

        </div>
    );
};

export default Faq;