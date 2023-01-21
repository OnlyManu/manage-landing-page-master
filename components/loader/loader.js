import { useEffect, useState } from "react"
import styles from "./loader.module.css"

export default function Loader() {
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!isLoaded) {
            setLoaded(true)   
        }
    }, [isLoaded])

    return (
        <div className={isLoaded ? styles.container+" "+styles.close : styles.container}>
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