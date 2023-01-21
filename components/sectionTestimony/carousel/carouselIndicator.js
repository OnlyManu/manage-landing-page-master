import PropTypes from 'prop-types'
import styles from './carousel.module.css'

export default function CarouselIndicator({ active, indice }) {
    return (
        <div className={active === indice ? styles.indicator+" "+styles.active : styles.indicator}></div>
    )
}

CarouselIndicator.PropTypes = {
    active: PropTypes.bool.isRequired,
    indice: PropTypes.number.isRequired
}