import Image from "next/image"
import PropTypes from "prop-types"
import styles from "./carousel.module.css"
import utils from "../../../styles/utils.module.css"

export default function CarouselSlot({ image, author, children }) {
    return (
        <div className={styles.slotContainer}>
            <Image
                className={styles.slotPicture} 
                src={image}
                height={144}
                width={144}
                alt={author}
            />
            <div className={utils.textBlock + " " + styles.slotTestimony}>
                <strong className={styles.slotAuthor}>{ author }</strong>
                <p className={utils.textSm}>{ children }</p>
            </div>
        </div>
    )
}

CarouselSlot.propTypes = {
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}