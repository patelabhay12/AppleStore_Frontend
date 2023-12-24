import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import Data from './data';

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {
                            Data?.map((el, index) => {
                                return (
                                    <>
                                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                            <Link to="/product">
                                                <a className="block relative h-48 rounded overflow-hidden ">
                                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={ el.img} />
                                                </a>
                                            </Link>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{ el.name}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{ el.description}</h2>
                                                <p className="mt-1 ">{ el.price}</p>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero;