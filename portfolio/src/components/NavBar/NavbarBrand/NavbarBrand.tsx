import Image from 'next/future/image'
import Link from "next/link";
import { StaticImageData } from "next/image";


type NavBarBrandProps = {
    image?: boolean,
    brandName: string,
    brandImage: StaticImageData | string,
}

function NavbarBrand( { image = true, brandName, brandImage, ...rest }: NavBarBrandProps ) {

    const brandLink = image ?
        <Image className="hover:cursor-pointer hidden h-8 w-auto lg:block rounded" src={brandImage} height={30} width={30} alt="kipp0" /> :
        <span className="hidden h-8 w-auto lg:block" >{brandName}</span>


    return (
        <Link href="/" aria-current="page" {...rest}>
            {brandLink}
        </Link>
    )
}

export default NavbarBrand