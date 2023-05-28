import React from 'react'
// Components
import Tag from '@/components/shared/Tag'

const Hero = () => {
    return (
        <section className='flex flex-col wrapper lg:flex-row '>
            <div className='flex-1'>
                <Tag  text='Sale 70%' />
            </div>
            <div className='flex-1'></div>
        </section>
    )
}

export default Hero