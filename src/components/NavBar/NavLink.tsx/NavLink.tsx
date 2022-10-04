import Link from "next/link"
import React from "react"
import { UrlObject } from "url"
import helpers from "../../../helpers"

type NavLinkProps = Omit<React.HTMLProps<HTMLAnchorElement>, 'href'> & {
    current: boolean,
    href: UrlObject | string,
}

function NavLink( { href, current, className = '', children, ...props }: NavLinkProps ) {
    const stateClasses = current ? 'text-gray-300' : 'text-gray-700'
    return (
        <Link href={href} aria-current="page" passHref>
            <a {...props} className={helpers.join.classNames( stateClasses, className )}>{children}</a>
        </Link>
    )
}

export default NavLink