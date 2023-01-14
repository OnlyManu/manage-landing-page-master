import styles from './navigation.module.css'
import Navlinks from '../../navlinks/navlinks'
import Link from '../../link/link'

export default function Navigation({open}) {
    return (
        <nav className={styles.container}>
            <Navlinks>
                <Link>Home</Link>
                <Link>Pricing</Link>
                <Link>Products</Link>
                <Link>About Us</Link>
                <Link>Careers</Link>
                <Link>Community</Link>
            </Navlinks>
        </nav>
    )
}