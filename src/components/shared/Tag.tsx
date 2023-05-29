import React, { FC, HTMLAttributes } from 'react';
// utils
import { customTwMerge } from "@/utils/custom-merge"

interface IProps extends HTMLAttributes<HTMLDivElement> {
    text: string
}

const Tag: FC<IProps> = ({ className, text, ...rest }) => {

    const classes = customTwMerge("bg-blue-100  text-blue-700 py-2.5 px-10 text-20 w-fit rounded-lg  font-semibold", className)
    return (
        <div className={classes} {...rest}>{text}</div>
    )
}

export default Tag