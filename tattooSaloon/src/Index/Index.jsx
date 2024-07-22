import Card from './Card';
import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './Index.module.css';

export default function Index() {
    const [imageWidths, setImageWidths] = useState([]);
    const imageRefs = useRef([]);

    useEffect(() => {
        const widths = imageRefs.current.map(img => img.offsetWidth);
        setImageWidths(widths);

        const containers = document.querySelectorAll(`.${styles.imagesContainer}`);

        const animateAfter1Second = () => {
            setTimeout(() => {
                containers.forEach(Element => Element.classList.add(`${styles.slideAnimation}`)

                );
            }, 100);
        }
        animateAfter1Second();


    }, []);

    return (
        <>
            <Header />
            <Container src='src/assets/main@0,5x.png' height={1080}>
                <h1 className={styles.heading}>Valentine</h1>
                <p className={styles.paragraph}>Digital artist and tattoo designer</p>
            </Container>
            <div className={styles.aboutPageWrapper}>
                <div className={styles.aboutImg}><img src='src/assets/selfir.jpg' alt="The photo of the artist" /></div>
                <div className={styles.aboutDesc}>
                    <h1>Hi, I`m Valentine</h1>
                    <p>
                        Hello, I'm Valentine, a digital artist and tattoo designer. <br />Welcome to my website, where I`d like to share some of my works. Enjoy!
                    </p>
                    <Link to="/about"><button className={styles.btn}>Learn more</button></Link>
                </div>
            </div>
            <div className={styles.sliderWrapper}>
                <div className={styles.imagesContainer} id="imagesContainer">
                         <Card                           
                            ref={el => imageRefs.current[0] = el}
                            imageSrc="src/assets/1.jpg"
                            imageWidth={imageWidths[0]}
                            overlayHeader="Some header"
                            overlayText="Learn more..."
                            linkTo="/about"
                        />
                     <Card                           
                            ref={el => imageRefs.current[1] = el}
                            imageSrc="src/assets/17.jpg"
                            imageWidth={imageWidths[1]}
                            overlayHeader="Some header"
                            overlayText="Learn more..."
                            linkTo="/about"
                        />
                     <Card                           
                            ref={el => imageRefs.current[2] = el}
                            imageSrc="src/assets/3.jpg"
                            imageWidth={imageWidths[2]}
                            overlayHeader="Some header"
                            overlayText="Learn more..."
                            linkTo="/about"
                        />
                    <Card                           
                            ref={el => imageRefs.current[3] = el}
                            imageSrc="src/assets/20.jpg"
                            imageWidth={imageWidths[3]}
                            overlayHeader="Some header"
                            overlayText="Learn more..."
                            linkTo="/about"
                        />
                     <Card                           
                            ref={el => imageRefs.current[4] = el}
                            imageSrc="src/assets/5.jpg"
                            imageWidth={imageWidths[4]}
                            overlayHeader="Some header"
                            overlayText="Learn more..."
                            linkTo="/about"
                        />
                </div>
                <div className={styles.imagesContainer} id="imagesContainer">
                         <Card                           
                            ref={el => imageRefs.current[0] = el}
                            imageSrc="src/assets/1.jpg"
                            imageWidth={imageWidths[0]}
                            overlayHeader="Some header"
                            overlayText="Learn more..."
                            linkTo="/about"
                        />
                     <Card                           
                            ref={el => imageRefs.current[1] = el}
                            imageSrc="src/assets/17.jpg"
                            imageWidth={imageWidths[1]}
                            overlayHeader="Some header"
                            overlayText="Learn more..."
                            linkTo="/about"
                        />
                     <Card                           
                            ref={el => imageRefs.current[2] = el}
                            imageSrc="src/assets/3.jpg"
                            imageWidth={imageWidths[2]}
                            overlayHeader="Some header"
                            overlayText="Learn more..."
                            linkTo="/about"
                        />
                    <Card                           
                            ref={el => imageRefs.current[3] = el}
                            imageSrc="src/assets/20.jpg"
                            imageWidth={imageWidths[3]}
                            overlayHeader="Some header"
                            overlayText="Learn more..."
                            linkTo="/about"
                        />
                     <Card                           
                            ref={el => imageRefs.current[4] = el}
                            imageSrc="src/assets/5.jpg"
                            imageWidth={imageWidths[4]}
                            overlayHeader="Some header"
                            overlayText="Learn more..."
                            linkTo="/about"
                        />
                </div>
            </div>
           <div className={styles.contactPageWrapper}>
                <h1>Want to work together?</h1>
                <p>Contact me !</p>
                <p className={styles.email}>email@example.com</p>
           </div>

            <Footer />
        </>
    );
}
