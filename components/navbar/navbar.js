import Image from 'next/image'

import Navlinks from './navlinks/navlinks'
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Image
                className={styles.logo} 
                src="/images/logo.svg"
                height={24}
                width={146}
                priority={true}
                alt=""
            />
            <Image
                className={styles.burgerIcon} 
                src="/images/icon-hamburger.svg"
                height={18}
                width={25}
                priority={true}
                alt=""
            />
            <Navlinks open={false} />
        </div>
    )
}