import { Children } from "react"
import Link from "../link/link"

export default function Navlinks({className, children}) {
    const links = Children.toArray(children)
    return (        
        <ul className={className}>
            {links}
        </ul>        
    )
}