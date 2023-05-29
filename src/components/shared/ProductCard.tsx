"use client"
import React, { FC, HTMLAttributes } from 'react'
import Image from 'next/image';
import { urlFor } from '@/utils/getUrl';
// Types
import { Image as IImage } from "sanity";
import Button from './Button';
import { useRouter } from 'next/navigation';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    data: {
        productImage: {
            src: IImage,
            alt?: string
        }
        title: string,
        category: string,
        price: number,
        _id: string
    }
}


const ProductCard: FC<IProps> = ({ data, ...rest }) => {

    const router = useRouter()

    const handleAddToCart = async () => {
        const res = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
                productid: data._id,
                quantity: 1
            })
        })

        const result = await res.json();
        console.log(result);

        router.refresh()


    }

    return (
        <div {...rest}>
            <Image
                width={300}
                height={300}
                className='h-[20rem] object-cover'
                src={urlFor(data.productImage.src).url()} alt={data.productImage.alt ?? "Product Image"} />
            <h2>{data.title}</h2>
            <h3>Price: ${data.price}</h3>
            <Button className='px-4 py-2 text-sm text-white' onClick={handleAddToCart} text={'Add to cart'} />
        </div>
    )
}

export default ProductCard