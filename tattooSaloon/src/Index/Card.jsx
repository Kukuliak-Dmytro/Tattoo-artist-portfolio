import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Index.module.css';

const Card = React.forwardRef((props, ref) => (
    <>
    <div className={styles.cardContainer}>
        
        <div className={styles.outerWrapper}>
            Header text
        </div>        
        <img src={props.src} alt="error" />

    </div>
    </>
        // <Link to={props.linkTo}>
        //     <div className={styles.imgWrapper}>
        //         <img ref={ref} src={props.imageSrc} alt="" />
        //         <div className={styles.innerWrapper} style={{ width: props.imageWidth }}>
        //             <div className={styles.overlayText}>
        //                 <div className={styles.headInnerText}><h1>{props.overlayHeader}</h1></div>
        //                 <div className={styles.LernMoreInnerText}><p>{props.overlayText}</p></div>
        //             </div>
        //         </div>
        //     </div>
        // </Link>
));

export default Card;
