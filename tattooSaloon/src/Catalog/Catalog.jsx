import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import styles from "./Catalog.module.css";
import Modalstyles from "./modal.module.css";
import Item from "./Item";
import { BiSearch } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";

import imgCut from '../assets/cut@0,5x.png';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';
import img16 from '../assets/16.jpg';
import img17 from '../assets/17.jpg';
import img18 from '../assets/18.jpg';
import img19 from '../assets/19.jpg';
import img20 from '../assets/20.jpg';
import img21 from '../assets/21.jpg';
import img22 from '../assets/22.jpg';
import img23 from '../assets/23.jpg';
import img24 from '../assets/24.jpg';
import img25 from '../assets/25.jpg';
import img26 from '../assets/26.jpg';
import img27 from '../assets/27.jpg';
import img28 from '../assets/28.jpg';
import img29 from '../assets/29.jpg';
import img30 from '../assets/30.jpg';
import img31 from '../assets/31.jpg';
import img32 from '../assets/32.jpg';
import img33 from '../assets/33.jpg';
import img34 from '../assets/34.jpg';
import img35 from '../assets/35.jpg';
import img36 from '../assets/36.jpg';
import img37 from '../assets/37.jpg';
import img38 from '../assets/38.jpg';
import img39 from '../assets/39.jpg';
import img40 from '../assets/40.jpg';
import img41 from '../assets/41.jpg';
import img42 from '../assets/42.jpg';
import img43 from '../assets/43.jpg';
import img44 from '../assets/44.jpg';
import img45 from '../assets/45.jpg';
import img46 from '../assets/46.jpg';
import img47 from '../assets/47.jpg';
import img48 from '../assets/48.jpg';




export default function Catalog() {
  const { pageNo } = useParams();
  const imagesArray = [
    [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
    [img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24],
    [img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36],
    [img37, img38, img39, img40, img41, img42, img43, img44, img45, img46, img47, img48]
  ];

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [pageNo]);

  return (
    <>
      <Header />
      <Container src={imgCut} height={250} justify="center">
        <div className={styles.searchContainer}>
          <form action="search">
            <input type="text" className={styles.search} placeholder="Search" />
          </form>
          <button className={styles.searchBtn}><BiSearch /></button>
        </div>
      </Container>
      <div className={styles.cardsWrapper}>
       
          {imagesArray[pageNo - 1].map((image, index) => (
            <Item
              key={index}
              src={image}
            />
          ))}
      
      </div>
      
    

      <div className={styles.buttonsWrapper}>   
          <button className={`${styles.pageBtn} ${pageNo == 1 ? styles.active : ''}`} onClick={() => window.location='/Tattoo-artist-portfolio/catalog/1'}>1</button>
          {/* brute forcing urls, but I haven`t learned any back end yrt to make it look authentic, so maybe later */}
          <button className={`${styles.pageBtn} ${pageNo == 2 ? styles.active : ''}`} onClick={() => window.location='/Tattoo-artist-portfolio/catalog/2'}>2</button>
          <button className={`${styles.pageBtn} ${pageNo == 3 ? styles.active : ''}`} onClick={() => window.location='/Tattoo-artist-portfolio/catalog/3'}>3</button>
          <button className={`${styles.pageBtn} ${pageNo == 4 ? styles.active : ''}`} onClick={() => window.location='/Tattoo-artist-portfolio/catalog/4'}>4</button>
      
      </div>
      <Footer />
      <div className={Modalstyles.modal} >
        <div className={Modalstyles.closeBtn}>&#10006;</div>
            <img src={img4} alt="Image Preview"/>
      
    </div>
    <div className={Modalstyles.overlay}></div>
    </>
  );
}
