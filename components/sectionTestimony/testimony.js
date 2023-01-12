import styles from './testimony.module.css'
import utils from '../../styles/utils.module.css'

import CarouselTestimony from './carousel/carousel'

export default function Testimony() {
    return (
        <section className={styles.container}>
            <h2 className={utils.headingMd}>What they’ve said</h2>
            <CarouselTestimony />
            <button className={utils.btnWithShadow}>Get Started</button>
        </section>
    )
}