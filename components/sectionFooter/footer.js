import styles from './footer.module.css'
import utils from '../../styles/utils.module.css'
import Link from '../link/link'
import Navlinks from '../navlinks/navlinks'
import Newsletter from '../newsletter/newsletter'
import SocialLinks from '../socialLinks/socials'
import Logo from '../logo/logo'
import Copyright from '../copyright/copyright'

export default function Footer() {
    return (
        <div className={styles.container}>
            <Newsletter />
            <Navlinks className={utils.navLinksFooter}>
                <Link>Home</Link>
                <Link>Pricing</Link>
                <Link>Products</Link>
                <Link>About Us</Link>
                <Link>Careers</Link>
                <Link>Community</Link>
                <Link>Privacy Policy</Link>
            </Navlinks>
            <SocialLinks />
            <Logo />
            <Copyright />
        </div>
    )
}