import PropTypes from 'prop-types'
import styles from './navigation.module.css'
import utils from '../../../styles/utils.module.css'
import Navlinks from '../../navlinks/navlinks'
import Link from '../../link/link'

export default function Navigation({isOpen}) {
    return (
        <nav className={isOpen ? styles.container+" "+styles.open : styles.container}>
            <Navlinks className={utils.navLinksHeader}>
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

Navigation.PropTypes = {
    isOpen: PropTypes.bool
}