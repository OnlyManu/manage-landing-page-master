import styles from './about.module.css'
import utils from '../../styles/utils.module.css'
import Difference from './difference/difference'

const differences = [
    {
        title: "Track company-wide progress",
        text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    },
    {
        title: "Advanced built-in reports",
        text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
    },
    {
        title: "Everything you need in one place",
        text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
    }
]

export default function About() {
    return (
        <section className={styles.container}>
            <div className={utils.textBlock+" "+styles.header}>
                <h2 className={utils.headingMd}>What’s different about Manage?</h2>
                <p className={utils.textSm}>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
            </div>
            <div className={styles.differenceList}>
                {
                    differences.map((difference, indice) => (
                        <Difference key={indice} indice={indice + 1} title={difference.title}>{ difference.text }</Difference>
                    ))
                }                
            </div>
        </section>
    )
}