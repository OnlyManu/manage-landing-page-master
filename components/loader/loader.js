import styles from "./loader.module.css"

export default function Loader() {
    return (
        <div className={styles.container} id="loader">
            <div className={styles.barContainer}>
                <div className={styles.bar} style={{"--i": 1}}></div>
                <div className={styles.bar} style={{"--i": 3}}></div>
                <div className={styles.bar} style={{"--i": 2}}></div>
                <div className={styles.bar} style={{"--i": 3}}></div>
                <div className={styles.bar} style={{ "--i": 1 }}></div>
            </div>
            
            <div className={styles.message}>Loading...</div>
        </div>
    )
}