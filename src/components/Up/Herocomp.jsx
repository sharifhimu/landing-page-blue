import React from 'react';
import './Herocomp.css'
import img from '../../assets/images/image.png'

const Herocomp = () => {
    return (
        <div className="herocomp" >
            <div className="left-side" >
                <div className="left-margin-div" >
                <p style={{ letterSpacing: '2px' }} > Business Workflow </p>
                <h1> Get the most efficient UI design for your business now! </h1>
                <p style={{ fontSize: '24px' }} > Hire me to design a clean and modern UI for your product’s website. </p>

                <div  className="btns-div" >
                     <a href="#" className="w-18 flex items-center justify-center px-7 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-2  md:text-lg md:px-8" >
                        Hire Me
                    </a>

                    <a href="#" className="w-18 flex items-center justify-center px-7 py-2 border  text-base font-medium rounded-md    md:py-2  md:text-lg md:px-8  mx-2" >
                        Portfolio
                    </a>
                </div>

                </div>
            </div>

            <div className="right-side" >  <img  src={img} /> </div>
        </div>
    );
};

export default Herocomp;