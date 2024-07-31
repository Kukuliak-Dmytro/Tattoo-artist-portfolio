import Card from './Card';
import { useEffect} from "react";
import {Outlet, Link } from 'react-router-dom';
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './Index.module.css';

export default function Index() {   

    useEffect(() => {
  
        const containers = document.querySelectorAll(`.${styles.imagesContainer}`);

        const animateAfter1Second = () => {
            setTimeout(() => {
                containers.forEach(Element => Element.classList.add(`${styles.slideAnimation}`)

                );
            }, 1000);
        }
        animateAfter1Second();


    }, []);

    return (
        <>
            <Header />
            
            <Container src="/Tattoo-artist-portfolio/images/main@0,5x.png" height={1080} justify="center">
                <h1 className={styles.heading}>Valentine</h1>
                <p className={styles.paragraph}>Digital artist and tattoo designer</p>
            </Container>
            <div className={styles.aboutPageWrapper}>
                <div className={styles.aboutImg}>
                    <div className={styles.imgBorder}>
                        <img src='src/assets/selfir.jpg' alt="The photo of the artist" />
                    </div>
                </div>
                <div className={styles.aboutDesc}>
                    <h1>Greetings!</h1>
                    <Outlet/>
                    <p>
                        Hello, I'm Valentine, a digital artist and tattoo designer. I live in Chernivtsi, Ukraine. I`ve been working with arts since I graduated college. <br />Welcome to my website, where I`d like to share some of my works. Enjoy!
                    </p>
                    <Link to="/Tatto-artist-portfolio/about"><button className={styles.btn}>Learn more</button></Link>
                </div>
            </div>
            <div className={styles.outerSliderWrapper}>
                <div className={styles.sliderWrapper}>
                    <h1 className={styles.myWorkHeading}>My work</h1>
                    <div className={styles.imagesContainer}>
                        <Card src="src/assets/1.jpg" link="/catalog/view/1" heading="Memento mori"/>
                        <Card src="src/assets/17.jpg" link="/catalog/view/17"heading="Glyphs"/>
                        <Card src="src/assets/3.jpg" link="/catalog/view/3"heading="Drall"/>
                        <Card src="src/assets/20.jpg" link="/catalog/view/20"heading="Locus"/>
                        <Card src="src/assets/5.jpg" link="/catalog/view/5"heading="Prince"/>
                    </div>
                    <div className={styles.imagesContainer}>
                        <Card src="src/assets/1.jpg" link="/catalog/view/1" heading="Memento mori"/>
                        <Card src="src/assets/17.jpg" link="/catalog/view/17"heading="Glyphs"/>
                        <Card src="src/assets/3.jpg" link="/catalog/view/3"heading="Drall"/>
                        <Card src="src/assets/20.jpg" link="/catalog/view/20"heading="Locus"/>
                        <Card src="src/assets/5.jpg" link="/catalog/view/5"heading="Prince"/>
                    </div>
                    <br />
                </div>
              <Link to="/Tatto-artist-portfolio/catalog/1"> <button className={styles.btn}>More work </button> </Link>

            </div>
          
            <div className={styles.contactPageWrapper}>
                <h1>Want to work together?</h1>
                <p>Contact me !</p><br />
                <p className={styles.email}>email@example.com</p>
                <br />

                <p>Or</p>
                <Link to="/Tatto-artist-portfolio/contact"><button className={styles.btn}>Fill the form</button></Link>
            </div>

            <Footer />
        </>
    );
}
