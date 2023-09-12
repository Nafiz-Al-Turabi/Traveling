import React from 'react';

const TopDest = () => {
    return (
        <div className='my-10'>
            <div>
                <div className='relative'>
                    <h2 className='text-center text-green-500 font-semibold text-2xl p-4'>Top Destination</h2>
                    <img className='h-8 absolute top-3 right-[500px]' src="https://i.ibb.co/gTByHzx/rainbow.png" alt="" />
                </div>
                <p className='text-center font-extrabold text-5xl p-4 mb-4'>Explore Top Destination</p>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='bg-red-50 hover:bg-white hover:shadow-2xl rounded-lg duration-500 p-8'>
                        <img className='rounded-lg ' src="https://i.ibb.co/d4w2q7b/big-house-2138499-1280.jpg" alt="" />
                        <div className='flex justify-between'>
                            <p className='bg-green-500 p-2 mt-2 rounded-md text-white'>Big-House,Brazil</p>
                            <p className='p-2 mt-2 rounded-md font-bold'>Review <span className='text-yellow-500 font-normal'>(4.5k)</span></p>
                        </div>
                        <p className='font-bold text-2xl my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='flex justify-between '>
                            <p className='text-xl font-semibold text-yellow-600'>$554</p>
                            <p className='font-bold text-gray-400'>10 Days Tripes</p>
                        </div>
                    </div>
                    <div className='bg-red-50 hover:bg-white hover:shadow-2xl rounded-lg duration-500 p-8'>
                        <img className='rounded-lg ' src="https://i.ibb.co/Lh9Znyf/taj-mahal-866692-1280.jpg" alt="" />
                        <div className='flex justify-between'>
                            <p className='bg-green-500 p-2 mt-2 rounded-md text-white'>Taz Mahal,India</p>
                            <p className='p-2 mt-2 rounded-md font-bold'>Review <span className='text-yellow-500 font-normal'>(4.5k)</span></p>
                        </div>
                        <p className='font-bold text-2xl my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='flex justify-between '>
                            <p className='text-xl font-semibold text-yellow-600'>$554</p>
                            <p className='font-bold text-gray-400'>10 Days Tripes</p>
                        </div>
                    </div>
                    <div className='bg-red-50 hover:bg-white hover:shadow-2xl rounded-lg duration-500 p-8'>
                        <img className='rounded-lg ' src="https://i.ibb.co/2SXym1s/architecture-1869125-1280.jpg" alt="" />
                        <div className='flex justify-between'>
                            <p className='bg-green-500 p-2 mt-2 rounded-md text-white'>Aifel tower,France</p>
                            <p className='p-2 mt-2 rounded-md font-bold'>Review <span className='text-yellow-500 font-normal'>(4.5k)</span></p>
                        </div>
                        <p className='font-bold text-2xl my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='flex justify-between '>
                            <p className='text-xl font-semibold text-yellow-600'>$554</p>
                            <p className='font-bold text-gray-400'>10 Days Tripes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopDest;