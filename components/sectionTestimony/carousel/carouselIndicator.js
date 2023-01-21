import PropTypes from 'prop-types'
import styles from './carousel.module.css'

export default function CarouselIndicator({ activeSlotIndice, indice }) {
    return (
        <div className={activeSlotIndice === indice ? styles.indicator+" "+styles.active : styles.indicator}></div>
    )
}

CarouselIndicator.propTypes = {
    activeSlotIndice: PropTypes.number.isRequired,
    indice: PropTypes.number.isRequired
}