import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const TopServices = () => {
    return (
        <div className='my-32 relative' style={{
            backgroundImage: 'url("https://i.ibb.co/s2B2nmf/svg-1.png")',
            backgroundSize: 'cover',
            height: '620px',
        }}>
            <div className='flex justify-between items-center'>
                <div>
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className='relative'>
                        <p className='text-green-500 text-2xl font-semibold mb-6'>Travel Point</p>
                        <img className='h-8 absolute -top-1 right-[450px]' src="https://i.ibb.co/gTByHzx/rainbow.png" alt="" />
                    </div>
                    <h1 data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className='text-6xl font-bold '>We offer best Services</h1>
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className='my-10 bg-gray-50 shadow-lg rounded-lg'>
                        <div className='flex items-center gap-5 p-6 hover:bg-white hover:shadow-lg hover:-translate-x-[35px] duration-500 rounded-tl-lg rounded-tr-lg'>
                            <div>
                                <img className='h-8' src="https://i.ibb.co/VxMWc37/76-764510-paper-plane-png.png" alt="" />
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold'>Local Event</h1>
                                <p className='text-xl text-gray-600 font-semibold'>Lorem ipsum dolor sit amet.hello </p>
                            </div>
                        </div>
                        <hr className='border-2' />
                        <div className='flex items-center gap-5 p-6  hover:bg-white hover:shadow-lg hover:-translate-x-[35px] duration-500'>
                            <div>
                                <img className='h-8' src="https://i.ibb.co/VxMWc37/76-764510-paper-plane-png.png" alt="" />
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold'>Local Event</h1>
                                <p className='text-xl text-gray-600 font-semibold'>Lorem ipsum dolor sit amet.hello </p>
                            </div>
                        </div>
                        <hr className='border-2' />
                        <div className='flex items-center gap-5 p-6  hover:bg-white hover:shadow-lg hover:-translate-x-[35px] duration-500 rounded-bl-lg rounded-br-lg'>
                            <div>
                                <img className='h-8' src="https://i.ibb.co/VxMWc37/76-764510-paper-plane-png.png" alt="" />
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold'>Local Event</h1>
                                <p className='text-xl text-gray-600 font-semibold'>Lorem ipsum dolor sit amet.hello </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <img className='h-[700px]' src="https://i.ibb.co/d23Wrcx/tourist-presenting-something.png" alt="" />
                </div>
            </div>
            <div className='absolute -bottom-16 right-96 hover:-translate-y-1/2 duration-500'>
                <div className="w-40 bg-white rounded-lg overflow-hidden shadow-lg">
                    <div data-aos="fade-up" className='bg-orange-400 flex items-center justify-center p-6 '>
                        <img src="https://i.ibb.co/1Lp5ZZR/placeholder.png" alt="Product Image" className="h-12 w-12" />
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800">Uk.London</h3>

                        <div className="flex items-center mt-2">
                            <div className="flex items-center">
                                <span className="ml-1 text-gray-700">4.5</span>
                            </div>

                            <span className="mx-2">|</span>

                            <span className="text-gray-700">$244.99</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopServices;