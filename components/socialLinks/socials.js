import Image from 'next/image'
import styles from './socials.module.css'

export default function SocialLinks() {
    return (
        <div className={styles.container}>
            <Image
                className={styles.socialIcon} 
                src="/images/icon-facebook.svg"
                height={20}
                width={20}
                alt=""
            />
            <Image
                className={styles.socialIcon} 
                src="/images/icon-youtube.svg"
                height={20}
                width={20}
                alt=""
            />
            <Image
                className={styles.socialIcon} 
                src="/images/icon-twitter.svg"
                height={20}
                width={20}
                alt=""
            />
            <Image
                className={styles.socialIcon} 
                src="/images/icon-pinterest.svg"
                height={20}
                width={20}
                alt=""
            />
            <Image
                className={styles.socialIcon} 
                src="/images/icon-instagram.svg"
                height={20}
                width={20}
                alt=""
            />
        </div>
    )
}