import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import styles from "./Catalog.module.css";
import Item from "./Item";
import { BiSearch } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";

import imgCut from '../assets/cut@0,5x.png';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';





export default function Catalog() {
  const { pageNo } = useParams();
  const imagesArray = [
    [img1, img2, img3, img4, 5, 6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]
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
        <Link to='/Tatto-artist-portfolio/catalog/1'>
          <button className={`${styles.pageBtn} ${pageNo == 1 ? styles.active : ''}`} onClick={() => window.location='/Tatto-artist-portfolio/catalog/1'}>1</button>
          {/* brute forcing urls, but I haven`t learned any back end yrt to make it look authentic, so maybe later */}
        </Link>
        <Link to='/Tatto-artist-portfolio/catalog/2'>
          <button className={`${styles.pageBtn} ${pageNo == 2 ? styles.active : ''}`} onClick={() => window.location='/Tatto-artist-portfolio/catalog/2'}>2</button>
        </Link>
        <Link to='/Tatto-artist-portfolio/catalog/3'>
          <button className={`${styles.pageBtn} ${pageNo == 3 ? styles.active : ''}`} onClick={() => window.location='/Tatto-artist-portfolio/catalog/3'}>3</button>
        </Link>
        <Link to='/Tatto-artist-portfolio/catalog/4'>
          <button className={`${styles.pageBtn} ${pageNo == 4 ? styles.active : ''}`} onClick={() => window.location='/Tatto-artist-portfolio/catalog/4'}>4</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
