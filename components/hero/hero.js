import Image from 'next/image'
import styles from './hero.module.css'
import utils from '../../styles/utils.module.css'

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.illustration}>
                <Image
                    className={styles.illustrationImage} 
                    src="/images/illustration-intro.svg"
                    height={525}
                    width={580}
                    alt=""
                />
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1 className={styles.heading}>Bring everyone together to build better products.</h1>
                    <p className={styles.description}>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                </div>
                <button className={utils.btnWithShadow}>Get Started</button>
            </div>
        </div>
    )
}