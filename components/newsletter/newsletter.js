import styles from './newsletter.module.css'

export default function Newsletter() {
    return (
        <form className={styles.container}>
            <input type="text" className={styles.input} placeholder="Updates in your inbox…" />
            <button className={styles.btnGo}>Go</button>
        </form>
    )
}