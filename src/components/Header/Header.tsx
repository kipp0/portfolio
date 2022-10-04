import React from "react";
import NavBar from "../NavBar";


const navigation = [
    { name: 'About', href: '/about', current: true },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Tools', href: '/tools', current: false },
]

function Header( { className, children }: React.HTMLProps<HTMLDivElement> ) {
    return (
        <header className={className}>
            <NavBar key='PageNav' navigationLinks={navigation} />
            {children}
        </header>
    )
}

export default Header