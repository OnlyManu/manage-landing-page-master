import styles from './carousel.module.css'

export default function CarouselIndicator({ active, indice }) {
    return (
        <div className={active === indice ? styles.indicator+" "+styles.active : styles.indicator}></div>
    )
}