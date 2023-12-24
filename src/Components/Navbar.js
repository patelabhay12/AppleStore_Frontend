import React from 'react'
import LOGO from '../assets/logo.png'
const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={ LOGO} alt="logo hai" className='h-10' />
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Store</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Mac</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">iPad</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">iPhone</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Watch</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Vision</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">AirPods</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">TV & Home</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Entertainment</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Support</a>
                    </nav>
                    
                </div>
            </header>

        </>
    )
}

export default Navbar;