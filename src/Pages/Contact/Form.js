import React from 'react';

const Form = () => {
    return (
        <>
        <form action="#">
            <div className="row">
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="text" name="name" placeholder="Your Name" required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="email" name="email" placeholder="Email Address" required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="text" name="subject" placeholder="Subject" required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-30">
                    <div className="contact__area-bottom-form-item">
                        <textarea name="message" rows="5" placeholder="Message"></textarea>
                    </div>
                </div>
                <div className="col-sm-12 mb-45">
                    <div className="contact__area-bottom-form-item">
                        <label><input className="mr-10" type="checkbox" />I agree with services tarms and condition</label>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="contact__area-bottom-form-item">
                        <button className="theme-btn-1" type="submit">Submit Now<i className="far fa-long-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </form>            
        </>
    );
};

export default Form;