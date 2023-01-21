import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styles from './alert.module.css'

export default function AlertBox({ children, isOpen, onClick }) {
    const [alertDiv, setAlertDiv] = useState(<div className={isOpen ? styles.alert + " " + styles.open : styles.alert} ></div>)

    const close = () => {
        onClick()
    }

    useEffect(() => {
        setAlertDiv(alertDiv => {
            return createPortal(
                <div className={isOpen ? styles.alert + " " + styles.open : styles.alert} >
                    <div className={styles.alertBox}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className={styles.alertIcon}>
                            <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
                        </svg>
                        <div className={styles.alertText}>
                            <span className={styles.headingAlert}>Well done</span>
                            <span className={styles.textAlert}>{ children }</span>
                        </div>
                        <button className={styles.alertButton} onClick={close}>Continue</button>
                    </div>
                    
                </div>,
            document.body) 
        })
    }, [isOpen])
    
    return (
        <>
            {alertDiv}
        </>
    )
}

alertBox.PropTypes = {
    children: PropTypes.element.isRequired,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func
}