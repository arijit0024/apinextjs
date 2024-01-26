import React from 'react'

const Myfooter = () => {
    return (

        <section className="bg-gray-900 text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Copyright information */}
                <div className="text-center md:text-left mb-2 md:mb-0">
                    &copy; 2024 Your Company. All rights reserved.
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Get in Touch */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">GET IN TOUCH</h2>
                        <p>123 Street, New York, USA</p>
                        <p>info@example.com</p>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">FOLLOW US</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300">
                                <img src="../img/fb.png" alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <img src="../img/instra.png" alt="Instagram" className="w-6 h-6" />
                            </a>

                        </div>
                    </div>

                    {/* Tool Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">TOOL SECTION</h2>
                        <div>
                            <a href="#" className="text-white hover:text-yellow-500">Tool 1</a>
                            {/* Add more tool links as needed */}
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Myfooter