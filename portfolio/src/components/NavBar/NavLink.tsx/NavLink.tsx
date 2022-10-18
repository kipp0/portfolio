import Link from "next/link"
import React from "react"
import { UrlObject } from "url"
import helpers from "../../../helpers"

type NavLinkProps = Omit<React.HTMLProps<HTMLAnchorElement>, 'href'> & {
    current: boolean,
    href: UrlObject | string,
}

function NavLink( { href, current, className = '', children, ...props }: NavLinkProps ) {
    const stateClasses = current ? 'text-gray-900' : 'text-gray-700'
    const underline = current ? <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-gray-700/0 via-gray-700/40 to-gray-700/0"></span> : <></>
    return (
        <Link href={href} aria-current={current ? "page" : undefined} passHref>
            <a {...props} className={helpers.join.classNames( stateClasses, className, 'relative' )}>
                {children}
                {underline}
            </a>
        </Link>
    )
}

export default NavLink