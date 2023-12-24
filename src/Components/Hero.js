import React from 'react';
import { Link } from 'react-router-dom';
import Data from './data';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {Data?.map((el, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                            <Link to={'/product'} className="group block relative rounded overflow-hidden">
                                <div className="aspect-w-2 aspect-h-3 bg-gray-200 group-hover:bg-gray-300 transition-all duration-300">
                                    <img
                                        alt={el.name}
                                        className="object-cover object-center w-full h-full"
                                        style={{ height: '200px' }}
                                        src={el.img}
                                    />
                                </div>
                            </Link>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{el.category}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{el.name}</h2>
                                <p className="mt-1">${el.price}</p>

                                <p className="text-gray-600 mt-2">{el.description}</p>
                
                              
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Hero;
