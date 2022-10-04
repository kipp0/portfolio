import Image from 'next/future/image'
import { Component } from 'react'

type Img<T> = {
    src: string,
    height: number,
    width: number,
    alt: string,
} & Component

function Img({src, height, width, alt, ref, ...rest }: Img ) {
    
    return (
        <span {...rest}>
            <Image src={src} height={height} width={width} alt={alt} />
        </span>
    )
}

export default Image