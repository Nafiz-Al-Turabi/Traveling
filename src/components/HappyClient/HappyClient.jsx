import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const HappyClient = () => {

    return (
        <div className="my-20">
            <div className='relative'>
                <h3 className='text-2xl text-green-500 text-center font-semibold'>Testimonial</h3>
                <img className='h-8 absolute -top-1 right-[520px]' src="https://i.ibb.co/gTByHzx/rainbow.png" alt="" />
            </div>
            <h1 className='text-6xl font-bold text-center mt-5'>What our happy clients says</h1>
            <div className='mt-32 flex items-center gap-5'>
                <div className='relative'>
                    <div data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center" className='h-[500px] w-[350px] bg-gray-300 rounded-3xl border-[5px] border-red-100'></div>
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1500"
                        className='absolute -top-20 -right-8'>
                        <img className='h-[500px] ' src="https://i.ibb.co/m6Knggz/smiley-woman-posing-her-baggage.png" alt="" />
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1500"
                        className='absolute -bottom-8 right-5'>
                        <img className='h-20' src="https://i.ibb.co/0sz9kx7/instagram.png" alt="" />
                    </div>
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1500" className='absolute top-40 -left-10'>
                        <div className='h-20 w-20 bg-yellow-500 rounded-full'>
                            <div className='flex justify-center items-center '>
                                <img className='h-4 mt-4' src="https://i.ibb.co/9VZBcgf/star.png" alt="" />
                            </div>
                            <p className='text-center font-bold '>4.5k</p>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div>
                        <div className='text-gray-500 p-5 h-40 w-[800px] bg-slate-50 rounded-lg shadow-lg hover:bg-green-500 hover:text-white  hover:-translate-x-[40px] duration-300 cursor-pointer'>
                            <h3 className='text-2xl font-bold  '>Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you</h3>
                            <p className=' font-semibold mt-2'>Harry Kane</p>
                        </div>
                        <div className='text-gray-500 mt-6 p-5 h-40 w-[800px] bg-slate-50 rounded-lg shadow-lg hover:bg-green-500 hover:text-white  hover:-translate-x-[40px] duration-300 cursor-pointer'>
                            <h3 className='text-2xl font-bold  '>Together we can change the world, just one random act of kindness at a time.</h3>
                            <p className=' font-semibold mt-2'>Nafiz Al Turabi</p>
                        </div>
                        <div className='text-gray-500 mt-6 p-5 h-40 w-[800px] bg-slate-50 rounded-lg shadow-lg hover:bg-green-500 hover:text-white  hover:-translate-x-[40px] duration-300 cursor-pointer'>
                            <h3 className='text-2xl font-bold  '>I don't believe that if you do good, good things will happen</h3>
                            <p className=' font-semibold mt-2'>Abdullah</p>
                        </div>
                    </div>
                    <div class="absolute h-[390px] w-1 bg-green-500 top-16 -right-10 rounded-full"></div>
                    <div className='absolute top-14 -right-[62px]'>
                        <img className='h-12' src="https://i.ibb.co/fn1x51K/check.png" alt="" />
                    </div>
                    <div className='absolute top-60 -right-[62px]'>
                        <img className='h-12' src="https://i.ibb.co/fn1x51K/check.png" alt="" />
                    </div>
                    <div className='absolute top-[420px] -right-[62px]'>
                        <img className='h-12' src="https://i.ibb.co/fn1x51K/check.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClient;
