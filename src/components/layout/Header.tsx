import React from 'react'
// Components
import Link from "next/link"
import Image from 'next/image'
import BagIcon from "@heroicons/react/24/outline/ShoppingBagIcon"


const links = [
    {
        text: "Female",
        slug: "female"
    },
    {
        text: "Male",
        slug: "male"
    },
    {
        text: "Kids",
        slug: "kids"
    },
    {
        text: "All Products",
        slug: "all-products"
    },


]

const Header = () => {
    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex items-center w-full py-8 wrapper'>

                <div className='flex-1'>
                    <Image src={"/logo.webp"} className='' width={135} height={30} alt="Dine Market" />
                </div>
                <ul className='hidden text-black lg:flex gap-x-8 text-18'>
                    {
                        links.map((item) => {
                            return (
                                <li key={item.slug}><Link href={`/${item.slug}/`}>{item.text}</Link></li>
                            )
                        })
                    }
                </ul>
                <div className='flex-1'>
                    <div className='relative w-12 h-12 ml-auto bg-gray-200 rounded-full cursor-pointer center'>
                        <BagIcon className='w-6 h-6' />
                        <p className='absolute -top-2 bg-red-500 rounded-full -right-2 min-h-[25px] min-w-[25px] text-center text-white'>5</p>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header