import styles from './Item.module.css'
import { BiHourglass } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'
import {Link} from 'react-router-dom'
export default function Item(props){
   
    return(
        <>
        <div className={styles.itemWrapper}>
            <div className={styles.imgWrapper}>
                <img src="src/assets/14.jpg" alt="" />
            </div>
            <div className={styles.cardDescriptionWrapper}>
                <div className={styles.cardStats}>
                    <span className={styles.dateMade}><MdDateRange></MdDateRange>{props.date}</span>
                    <span className={styles.hoursSpent}> {props.timeSpent} H<BiHourglass></BiHourglass></span>
                </div>
                <div className={styles.cardDescription}>
                    <h1>{props.title}</h1>
                    <Link>
                        <p>Learn more</p>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
Item.defaultProps={
    title:"Title",
    date:"Date",
    timeSpent:"Time spent"
}