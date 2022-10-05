import React from "react"

type IconProps = React.HTMLProps<HTMLDivElement>
function Icon( props: IconProps ) {
    return <div {...props} />
}

export default Icon
