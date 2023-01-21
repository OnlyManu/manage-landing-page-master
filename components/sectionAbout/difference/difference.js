import PropTypes from 'prop-types'
import styles from './difference.module.css'
import utils from '../../../styles/utils.module.css'

export default function Difference({title, indice, children}) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={styles.badge}>{ "0" + indice}</span>
                <span className={styles.text}>{ title }</span>
            </div>
            <p className={utils.textSm+" "+styles.difference}>{ children }</p>
        </div>
    )
}

Difference.propTypes = {
    title: PropTypes.string,
    indice: PropTypes.number,
    children: PropTypes.string.isRequired
}