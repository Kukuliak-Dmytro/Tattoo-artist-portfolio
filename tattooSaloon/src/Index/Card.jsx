import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Index.module.css';

const Card = React.forwardRef((props) => (
    <Link to={props.link}>
    <div className={styles.cardContainer}>
        
        <div className={styles.outerWrapper}>
           <div className={styles.innerWrapper}>
            <h1>{props.heading}</h1>
            <p>Learn more..</p>
           </div>
        </div>        
        <img src={props.src} alt="error" />

    </div>
    </Link>
       
));

export default Card;
