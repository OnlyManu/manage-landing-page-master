import Image from 'next/image'

import { useState } from 'react'
import Navigation from './navigation/navigation'
import styles from './navbar.module.css'
import utils from '../../styles/utils.module.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const openCloseNavigation = () => {
        const body = document.querySelector('body')
        isOpen ? body.classList.remove("scrollblock") : body.classList.add("scrollblock")
        setIsOpen(!isOpen)
    }
    
    return (
        <div className={styles.container}>
            <Image
                className={styles.logo+" "+utils.logo} 
                src="/images/logo.svg"
                height={24}
                width={146}
                priority={true}
                alt=""
            />
            <div className={styles.btnBurger} onClick={openCloseNavigation}>
                {
                    isOpen ? (
                        <Image
                            className={styles.burgerIcon} 
                            src="/images/icon-close.svg"
                            height={22}
                            width={21}
                            priority={true}
                            alt=""
                        />
                    ) : (
                        <Image
                            className={styles.burgerIcon} 
                            src="/images/icon-hamburger.svg"
                            height={18}
                            width={25}
                            priority={true}
                            alt=""
                        />        
                    )
                }
                
            </div>
            <Navigation isOpen={isOpen} />
            <button className={utils.btnWithShadow+" "+styles.btnNavbar}>Get Started</button>
        </div>
    )
}