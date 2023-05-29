import { ButtonHTMLAttributes, FC } from 'react'
// utils
import { customTwMerge } from "@/utils/custom-merge"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

const Button: FC<IProps> = ({ text, className, ...rest }) => {
    const classes = customTwMerge("bg-black py-3.5 px-10 text-white capitalize font-semibold text-white text-20", className)

    return (
        <button className={classes} {...rest}>{rest.children} {text}</button>
    )
}

export default Button