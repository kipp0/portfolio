import { StaticImageData } from "next/image"
import Image from 'next/future/image'
import helpers from "../helpers"

type ShowCardType = {
    image: string | StaticImageData
} & React.HTMLProps<HTMLDivElement>

function ShowCard( { image, className }: ShowCardType ) {
    const classes = helpers.join.classNames( className ?? '', 'relative aspect-[9/10] hover:aspect-video motion-safe:hover:scale-105 duration-500 w-44 flex-none overflow-hidden bg-zinc-100 dark:bg-zinc-800 sm:w-72' )
    return (
        <div className={classes}>
            <Image alt=""
                src={image}
                sizes="(min-width: 640px) 18rem, 11rem"
                width="3744"
                height="5616"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover rounded"
                loading="lazy" />
        </div>
    )
}

export default ShowCard