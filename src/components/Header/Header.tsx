import React from "react";
import helpers from "../../helpers";
import NavBar from "../NavBar";


const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Tools', href: '/tools', current: false },
]

function Header( { className, children }: React.HTMLProps<HTMLDivElement> ) {
    const classes = className ?? ''
    return (
        <header className={helpers.join.classNames( classes, 'pb-4 pointer-event-none relative z-50' )}>
            <NavBar key='PageNav' navigationLinks={navigation} />
            {children}
        </header>
    )
}

export default Header