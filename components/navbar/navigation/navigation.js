import styles from './navigation.module.css'
import Navlinks from '../../navlinks/navlinks'

export default function Navigation({open}) {
    return (
        <nav className={styles.container}>
            <Navlinks />
        </nav>
    )
}