import React from 'react';
import './landingPage.css'
import Up2 from '../../components/Up/Up2'
import Mid from '../../components/Mid/Mid'
import Down from '../../components/Down/Down'
import Herocomp from '../../components/Up/Herocomp'

const landingPage = () => {
    return (
        <div className="landingpage-div" >
            <Up2  />
            <Herocomp/>
            <Mid/>
            <Down/>
        </div>
    );
};

export default landingPage;