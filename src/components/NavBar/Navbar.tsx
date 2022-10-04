import { useRouter } from "next/router";
// import { useState } from "react";
// import { Disclosure } from '@headlessui/react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Me from '../../../public/assets/images/me.jpeg'
import NavbarBrand from "./NavbarBrand";
import NavLink from "./NavLink.tsx/NavLink";
import styles from './Navbar.module.css'
import helpers from "../../helpers";

type NavBarProps = {
    navigationLinks: {
        name: string,
        href: string,
        current: boolean
    }[]
} & React.HTMLProps<HTMLDivElement>

function Nav( { navigationLinks }: NavBarProps ) {
    // const { isOpen, setIsOpen } = useState(false)
    const router = useRouter()

    return (
        <nav className="">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 justify-between">
                        <div className="flex flex-1 flex-shrink-0 items-center">
                            <Nav.Brand brandImage={Me} brandName="Kipp0" />
                        </div>
                        <div className={"hidden sm:block flex flex-1"}>
                            <div className={helpers.join.classNames( "menu inline-flex space-x-4 w-full justify-center", styles.menu ?? '' )} >
                                {
                                    navigationLinks.map( ( link, idx ) => (
                                        <Nav.Link key={idx} href={link.href} current={`${router.pathname}` === link.href ? true : false} className="px-3 py-2 text-sm font-medium navBarLink">{link.name}</Nav.Link>
                                    ) )
                                }
                            </div>
                        </div>
                        <div className="flex flex-1 flex-shrink-0 items-center justify-end">
                            <Nav.Brand brandImage={Me} brandName="Kipp0" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {
                        navigationLinks.map( ( link, idx ) => (
                            <Nav.Link key={idx} href={link.href} current={link.current} className="px-3 py-2 rounded-md text-sm font-medium">{link.name}</Nav.Link>
                        ) )
                    }
                </div>
            </div>
        </nav>
    )
}

Nav.Link = NavLink
Nav.Brand = NavbarBrand

export default Nav