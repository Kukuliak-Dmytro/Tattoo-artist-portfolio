import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import styles from "./Catalog.module.css";
import Item from "./Item";
import { BiSearch } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";

import imgCut from '../assets/cut@0,5x.png';

// src/utils/importImages.js

 const importAllImages = () => {
  let images = {};
  for (let i = 1; i <= 48; i++) {
      images[i] = require(`../assets/${i}.jpg`);
  }
  return images;
};

export default function Catalog() {
  const { pageNo } = useParams();
  const imagesArray = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]
  ];

  const [loading, setLoading] = React.useState(true);
  const images = importAllImages();

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
                      src={images[image].default}
                  />
              ))}
          </div>
          <div className={styles.buttonsWrapper}>
              <Link to='/Tattoo-artist-portfolio/catalog/1'>
                  <button className={`${styles.pageBtn} ${pageNo == 1 ? styles.active : ''}`} onClick={() => window.location='/Tattoo-artist-portfolio/catalog/1'}>1</button>
              </Link>
              <Link to='/Tattoo-artist-portfolio/catalog/2'>
                  <button className={`${styles.pageBtn} ${pageNo == 2 ? styles.active : ''}`} onClick={() => window.location='/Tattoo-artist-portfolio/catalog/2'}>2</button>
              </Link>
              <Link to='/Tattoo-artist-portfolio/catalog/3'>
                  <button className={`${styles.pageBtn} ${pageNo == 3 ? styles.active : ''}`} onClick={() => window.location='/Tattoo-artist-portfolio/catalog/3'}>3</button>
              </Link>
              <Link to='/Tattoo-artist-portfolio/catalog/4'>
                  <button className={`${styles.pageBtn} ${pageNo == 4 ? styles.active : ''}`} onClick={() => window.location='/Tattoo-artist-portfolio/catalog/4'}>4</button>
              </Link>
          </div>
          <Footer />
      </>
  );
}