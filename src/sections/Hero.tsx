import React from 'react'
// Components
import Tag from '@/components/shared/Tag'
import Button from '@/components/shared/Button'
import Image from "next/image"
import Cart from "@heroicons/react/24/outline/ShoppingCartIcon"
// Images
import featured1 from "/public/images/featured1.webp"
import featured2 from "/public/images/featured2.webp"
import featured3 from "/public/images/featured3.webp"
import featured4 from "/public/images/featured4.webp"

const images = [
    { alt: "featured1", src: featured1 },
    { alt: "featured2", src: featured2 },
    { alt: "featured3", src: featured3 },
    { alt: "featured4", src: featured4 }
]

const Hero = () => {
    return (
        <section className='flex flex-col items-center gap-10 mt-8 wrapper lg:flex-row'>
            <div className='flex-1 xl:-mt-20'>
                <Tag text='Sale 70%' />
                <h1 className='font-bold leading-[1.1] text-h1 mt-6'>An Industrial Take on Streetwear</h1>
                <p className='max-w-lg mt-4 text-gray-400 mt- text-18'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits</p>
                <Button className='flex items-center mt-8 sm:px-20 gap-x-3' text='Start Shopping' >
                    <Cart className='w-8 shrink-0' />
                </Button>

                {/* Images */}
                <div className='flex flex-wrap w-full mt-12 gap-x-10 gap-y-5'>
                    {
                        images.map((img) => {
                            return (
                                <Image key={img.alt} className='w-32' src={img.src} alt={img.alt} />
                            )
                        })
                    }
                </div>
            </div>
            <div className='relative flex-1 -z-10'>
                <div className='h-[80%] w-[80%] grow-0 rounded-full -z-10 bg-[#ffece3] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]'>
                </div>
                <Image
                    src="/images/hero-poster.webp"
                    alt="hero image"
                    className='mx-auto -z-10'
                    priority
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={800}
                    height={800}
                />
            </div>
        </section>
    )
}

export default Hero