import styles from './getStarted.module.css'
import utils from '../../styles/utils.module.css'

export default function GetStarted() {
    return (
        <section className={styles.container}>
            <h2 className={utils.headingWhite+" "+styles.text}>Simplify how your team works today.</h2>
            <button className={utils.btnWhite}>Get Started</button>
        </section>
    )
}