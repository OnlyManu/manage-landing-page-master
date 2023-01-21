import { useState } from 'react'
import styles from './newsletter.module.css'

import AlertBox from '../alertBox/alertBox'

export default function Newsletter() {
    const [data, setData] = useState("")
    const [isCorrect, setCorrect] = useState(true)
    const [isOpen, setOpen] = useState(false)
    
    const isCorrectlyFormated = (email) => {
        return /^.+@\w+\.\w{2,4}$/.test(email)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isCorrectlyFormated(data)) {
            setData("")
            openCloseAlertBox()
        } else {
            setCorrect(false)
        }
    }
    const handleChange = (e) => {
        setData(e.target.value)
        if (!isCorrect) {
            setCorrect(true)
        }
    }
    const openCloseAlertBox = () => {
        setOpen(!isOpen)
    }

    return (
        <form className={styles.container}>
            <div className={styles.inputGroup}>
                <input type="email" className={isCorrect ? styles.input : styles.input + " " + styles.error} value={data} onChange={handleChange} placeholder="Updates in your inbox…" aria-label="email" />
                {!isCorrect && <span className={styles.errorMessage}>Please insert a valid email</span>}
            </div>
            <button type="submit" className={styles.btnGo} onClick={handleSubmit}>Go</button>
            <AlertBox isOpen={isOpen} onClick={openCloseAlertBox}>Thanks for suscribing to our newsletter.</AlertBox>
        </form>
    )
}