import React, { FC, HTMLAttributes } from 'react'
import Image from 'next/image';
import { urlFor } from '@/utils/getUrl';
// Types
import { Image as IImage } from "sanity";
import Button from './Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    data: {
        productImage: {
            src: IImage,
            alt?: string
        }
        title: string,
        category: string,
        price: number
    }
}


const ProductCard: FC<IProps> = ({ data, ...rest }) => {
    console.log(data)
    return (
        <div {...rest}>
            <Image
                width={300}
                height={300}
                className='h-[20rem] object-cover'
                src={urlFor(data.productImage.src).url()} alt={data.productImage.alt ?? "Product Image"} />
            <h2>{data.title}</h2>
            <h3>Price: ${data.price}</h3>
            <Button className='px-4 py-2 text-sm text-white' text={'Add to cart'}/>
        </div>
    )
}

export default ProductCard