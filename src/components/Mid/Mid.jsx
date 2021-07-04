import React from 'react';

const Mid = () => {

    const arr = [
        {
            title: 'GETTING STARTED',
            name: 'Singularity',
            brief: 'This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…'
        },
        {
            title: 'BUSINESS WORKFLOW',
            name: 'Plurality',
            brief: 'This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…'
        },
        {
            title: 'INTERACTIONS',
            name: 'Professional',
            brief: 'This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…'
        },
    ]

    return (
        <div style={{ textAlign: 'center' }} >
            <h1> Packages </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <div style={{ borderBottom:'2px solid #2859EE', width: '10%', opacity: '34%' }} ></div>
            </div>

            <div className="lg:flex  justify-center "  >
            <div className=" lg:flex md:block justify-center lg:max-w-5xl" >
            {
                arr.map((v, i) => {
                    return(
                        <div key={i} className=" bg-white px-5 py-6 shadow-lg mx-5 my-5 text-left cursor-pointer" >
                            <p className="my-2" style={{ color: '#2859EE' }} > {v.title} </p>
                            <h2 className="font-semibold text-xl my-2"> {v.name} </h2>
                            <p> {v.brief} </p>

                            <a href="#" className="w-18 flex items-center justify-center border border-transparent text-base font-small rounded-md text-white hover:bg-indigo-200  px-5 py-2   my-2 " style={{ backgroundImage: 'linear-gradient(to right, #1A4CED, #8EB7FB)', width: 'fit-content' }} >
                                See More
                            </a>

                        </div>
                    )
                })
            }
            </div>
            </div>
        </div>
    );
};

export default Mid;