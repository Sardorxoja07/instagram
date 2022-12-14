import React, { useEffect } from 'react';
import Timeline from '../../components/Timeline';
import Sidebar from './../../components/Sidebar/index';
import { Helmet } from 'react-helmet';

const HomePage = () => {        
    return (
        <div className="bg-white-50 pt-14">
            <Helmet>
                <title>Instagram</title>
            </Helmet>

            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg ">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    );
};

export default HomePage;
