import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Error404 = () => {
    return (
        <>
            <Navbar />
            <div className='w-screen h-screen flex justify-center items-center'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-4'>Page Not Found</h1>
                    <p className='text-lg'>404 Error</p>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default Error404;
