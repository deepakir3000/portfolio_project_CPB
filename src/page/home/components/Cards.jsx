import React from 'react'

const Cards = () => {
    const blogs = [
        { id: 1, image: "/src/assets/images/blog_1.jpg" },
        { id: 2, image: "/src/assets/images/blog_2.jpg" },
        { id: 3, image: "/src/assets/images/blog_3.jpg" }
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>
                    Caring is the new marketing
                </h2>
                <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nisi maiores eligendi optio aut et totam quas autem animi dolorum odio sed quia, laudantium veritatis dicta, dicta perspiciatis?
                </p>
            </div>

            {/* all blogs */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt="" className='rounded-xl hover:scale-95 transition-all duration-500' />
                    </div>)
                }
            </div>
        </div>
    )
}

export default Cards;