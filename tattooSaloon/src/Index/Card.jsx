import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Index.module.css';
import Modalstyles from "../Catalog/modal.module.css";


const Card = (props) => (
  
    <div className={styles.cardContainer}>
        
        <div className={styles.outerWrapper}>
           <div className={styles.innerWrapper}>
            <h1>{props.heading}</h1>
            <p>Learn more..</p>
           </div>
        </div>        
        <img src={props.src} alt="error"onClick={() => {
            const modalBody = document.querySelector(`.${Modalstyles.modal}`);
            const overlay = document.querySelector(`.${Modalstyles.overlay}`);
            overlay.classList.add(`${Modalstyles.overlayActive}`)
            modalBody.children[1].src =  props.src ;            
            modalBody.classList.add(`${Modalstyles.modalActive}`)
          }} />

    </div>
    
       
);

export default Card;
