import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex flex-row-reverse justify-between items-center bg-gradient-to-l to-white from-yellow-200 rounded-tr-full'>
                <div className='w-[]'>
                    <img className='h-[600px]' src="https://i.ibb.co/0m9s5X2/Pngtree-airplane-travel-tourism-supplies-6374202.png" alt="" />
                </div>
                <div className='w-[33%]'>
                    <h2 className='text-6xl font-bold'>Life is short & world is wide</h2>
                    <p className='my-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsam officiis, aliquam quaerat ab itaque laudantium, saepe repudiandae quibusdam soluta deserunt fugit perspiciatis dolor praesentium laboriosam consectetur voluptas facilis laborum!</p>
                    <div className='flex justify-between items-center'>
                        <button className='bg-green-500 p-3 text-white font-semibold rounded-lg'>Get Started</button>
                        <form className='bg-orange-500 p-3 rounded-e-full rounded-bl-full relative'>
                            <input className='bg-orange-500 w-56 text-slate-900 focus:outline-none pl-3' type="text" placeholder='Search...' required />
                            <button className='bg-white rounded-full h-8 w-8 hover:bg-slate-200 active:scale-95 absolute top-2 right-2  '>Q</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='grid grid-col-1 lg:grid-cols-4 gap-6 rounded-br-lg rounded-bl-lg shadow-lg p-10 mb-12 bg-gradient-to-l to-white from-yellow-200'>
                <div>
                    <h1 className='text-3xl mb-2 font-semibold'>what excites you most</h1>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex  justify-center items-center gap-5 hover:bg-gray-100 rounded-lg duration-300 p-4'>
                    <div>
                        <img className='w-24' src="https://i.ibb.co/qgVL0zz/travel.png" alt="" />
                    </div>
                    <div>
                        <h4 className='text-2xl mb-2 font-semibold'>Tracking</h4>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>
                <div  className='flex justify-center items-center gap-5 hover:bg-gray-100 rounded-lg duration-300 p-4'>
                    <div>
                        <img className='w-24' src="https://i.ibb.co/7zWFsm4/windsurf.png" alt="" />
                    </div>
                    <div>
                        <h4 className='text-2xl mb-2 font-semibold'>Windsurfing</h4>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>
                <div  className='flex justify-center items-center gap-5 hover:bg-gray-100 rounded-lg duration-300 p-4'>
                    <div>
                        <img className='w-24' src="https://i.ibb.co/x6qDZ0k/kayak.png" alt="" />
                    </div>
                    <div>
                        <h4 className='text-2xl mb-2 font-semibold'>Rafting</h4>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;