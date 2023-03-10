import { Children } from "react"
import PropTypes  from "prop-types"
import Link from "../link/link"
export default function Navlinks({className, children}) {
    const links = Children.toArray(children)
    return (        
        <ul className={className}>
            {links}
        </ul>        
    )
}

Navlinks.propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}