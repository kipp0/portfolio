import { UrlObject } from "url"
import Link from "next/link"
import helpers from "../../helpers"

type ButtonProps = Omit<React.HTMLProps<HTMLAnchorElement>, 'href'> & {
    href: UrlObject | string,
}

function Button( { href, children, className = '', ...rest }: ButtonProps ) {
    return (
        <Link href={href} aria-current="page" passHref>
            <a {...rest} className={helpers.join.classNames( className, 'relative' )}>
                {children}
            </a>
        </Link>
    )
}

export default Button