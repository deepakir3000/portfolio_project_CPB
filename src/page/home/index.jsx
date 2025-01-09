import React from 'react';
import HeroCarousel from './components/HeroCarousel';
import Cards from './components/Cards';
import Partners from './components/Partners';
import Roadmap from './components/Roadmap';
import Newsletter from './components/Newsletter';

const Home = () => {
    return (
        <>
            <div className="bg-[url('./src/assets/images/product_2.jpg')] bg-cover bg-center min-h-screen w-full flex items-center flex-col justify-center">
                <div className='px-4 md:px-24'>
                    <h1 className='text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug'>Innovation For <span className='text-yellow-200 leading-snug'>A Cause</span></h1>
                    <p className='text-white text-base mb-8 md:w-3/4'>Where to grow your business as a photographer: site or social media? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod.</p>
                </div>

                <div className='flex flex-col items-center'>
                    <p className='text-white text-base mb-8'>Meet our</p>
                    <button className='btn-primary'>SuperHero</button>
                </div>
            </div>
            <HeroCarousel />
            <Cards />
            <Roadmap />
            <Partners />
            <Newsletter />
        </>
    )
}

export default Home;