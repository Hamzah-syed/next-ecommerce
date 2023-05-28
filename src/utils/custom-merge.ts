import { extendTailwindMerge } from 'tailwind-merge'

export const customTwMerge = extendTailwindMerge({
    classGroups: {
        'font-size': ['text-18', 'text-20', "text-32"],
        'colors': []
    }
})