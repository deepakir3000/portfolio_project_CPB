import React from 'react';
import { Carousel } from "flowbite-react";
import banner1 from "../../../assets/images/banner_1.png";
import banner2 from "../../../assets/images/banner_2.png";


const HeroCarousel = () => {
    return (
        <div className='bg-gray-700' id='home'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner1} alt="" className='w-96' />
                        </div>

                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <p className='text-white text-base mb-8'>Where to grow your business as a photographer: site or social media? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate eveniet nesciunt facilis accusantium repellat? Illum voluptas eligendi porro soluta.</p>
                        </div>
                    </div>

                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner2} alt="" className='w-96' />
                        </div>

                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <p className='text-white text-base mb-8'>Where to grow your business as a photographer: site or social media? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, error similique illo aut itaque consequuntur expedita architecto aspernatur praesentium quasi.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default HeroCarousel;