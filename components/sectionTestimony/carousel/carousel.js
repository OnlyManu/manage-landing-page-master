import Image from 'next/image'
import styles from './carousel.module.css'
import utils from '../../../styles/utils.module.css'

const CarouselSlot = ({image, name, children}) => {
    return (
        <div className={styles.slotContainer}>
            <Image
                className={styles.slotPicture} 
                src={image}
                height={144}
                width={144}
                alt={name}
            />
            <div className={utils.textBlock + " " + styles.slotTestimony}>
                <strong className={styles.slotAuthor}>{ name }</strong>
                <p className={utils.textSm}>{ children }</p>
            </div>
        </div>
    )
}

const CarouselIndicator = ({active}) => {
    return (
        <div className={active ? styles.indicator+" "+styles.active : styles.indicator}></div>
    )
}

export default function CarouselTestimony() {
    return (
        <div className={styles.container}>
            <div className={styles.carouselSlots}>
                <CarouselSlot image="/images/avatar-anisha.png" name="Anisha Li">“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</CarouselSlot>
            </div>
            <div className={styles.carouselIndicators}>
                <CarouselIndicator active={true} />
                <CarouselIndicator active={false} />
                <CarouselIndicator active={false} />
                <CarouselIndicator active={false} />
            </div>
        </div>
    )
}