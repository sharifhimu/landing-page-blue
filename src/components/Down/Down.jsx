import React from 'react';
import './Down.css';

const Down = () => {
    return (
        <div className="down-div" >
            <p className=" text-white text-2xl font-bold" > Start a project with me </p>
            <p className=" text-white text-xl" > let’s discuss our ideas for presenting your business to the world <br/> in an attractive,  efficient and effective way. </p>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
            <a href="#" className=" flex items-center justify-center border border-transparent text-base font-semibold rounded-md text-indigo bg-white  hover:bg-indigo-200  lg:px-5 sm:px-20 px-20 py-2   my-2 " style={{  width: 'fit-content', color: '#2859EF' }} >
                Hire Me
            </a>
            </div>
        </div>
    );
};

export default Down;