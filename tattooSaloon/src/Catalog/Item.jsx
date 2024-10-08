import styles from './Item.module.css';
import { BiHourglass } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import { useEffect, useState } from 'react';


import Modalstyles from "./modal.module.css";

export default function Item({
  title = "Title",
  date = "Date",
  timeSpent = "Time spent",
  src
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadCards = () => {
      setTimeout(() => {
        setLoaded(true)
      }, 1000);
    }
    loadCards();
  }, [])
  return (
    <div className={styles.itemWrapper}>
      <ReactPlaceholder showLoadingAnimation={true} type='rect' rows={0} delay={200} ready={loaded} style={{ width: '290px', height: '250px', marginBottom: "25px" }} color='#808080'>
        <div className={styles.imgWrapper}>
          <img src={src} alt={title} onClick={() => {
            const modalBody = document.querySelector(`.${Modalstyles.modal}`);
            const overlay = document.querySelector(`.${Modalstyles.overlay}`);
            overlay.classList.add(`${Modalstyles.overlayActive}`)
            modalBody.children[1].src =  src ;            
            modalBody.classList.add(`${Modalstyles.modalActive}`)
          }} />
        </div>
      </ReactPlaceholder>
      <ReactPlaceholder showLoadingAnimation={true} type='text' rows={5} delay={200} ready={loaded} color='#808080'>

        <div className={styles.cardDescriptionWrapper}>
          <div className={styles.cardStats}>
            <span className={styles.dateMade}>
              <MdDateRange /> {date}
            </span>
            <span className={styles.hoursSpent}>
              {timeSpent} H <BiHourglass />
            </span>
          </div>
          <div className={styles.cardDescription}>
            <h1>{title}</h1>
            <Link to="#">
              <p>Learn more</p>
            </Link>
          </div>
        </div>
      </ReactPlaceholder>

    </div>

  );
}
