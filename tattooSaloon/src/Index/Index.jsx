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
                    <Link to='/'>
                        <div className={styles.imgWrapper}>
                            <img ref={el => imageRefs.current[0] = el} src="src/assets/1.jpg" alt="" />
                            <div className={styles.innerWrapper} style={{ width: imageWidths[0] }}>
                                <div className={styles.overlayText}>
                                    <div className={styles.headInnerText}><h1>Header text</h1></div>
                                    <div className={styles.LernMoreInnerText}><p>Learn more about this...</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.imgWrapper}>
                            <img ref={el => imageRefs.current[1] = el} src="src/assets/17.jpg" alt="" />
                            <div className={styles.innerWrapper} style={{ width: imageWidths[1] }}>
                                <div className={styles.overlayText}>
                                    <div className={styles.headInnerText}><h1>Some Header</h1></div>
                                    <div className={styles.LernMoreInnerText}><p>Learn more about this...</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.imgWrapper}>
                            <img ref={el => imageRefs.current[2] = el} src="src/assets/3.jpg" alt="" />
                            <div className={styles.innerWrapper} style={{ width: imageWidths[2] }}>
                                <div className={styles.overlayText}>
                                    <div className={styles.headInnerText}><h1>Some Header</h1></div>
                                    <div className={styles.LernMoreInnerText}><p>Learn more about this...</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.imgWrapper}>
                            <img ref={el => imageRefs.current[3] = el} src="src/assets/20.jpg" alt="" />
                            <div className={styles.innerWrapper} style={{ width: imageWidths[3] }}>
                                <div className={styles.overlayText}>
                                    <div className={styles.headInnerText}><h1>Some Header</h1></div>
                                    <div className={styles.LernMoreInnerText}><p>Learn more about this...</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.imgWrapper}>
                            <img ref={el => imageRefs.current[4] = el} src="src/assets/5.jpg" alt="" />
                            <div className={styles.innerWrapper} style={{ width: imageWidths[4] }}>
                                <div className={styles.overlayText}>
                                    <div className={styles.headInnerText}><h1>Some Header</h1></div>
                                    <div className={styles.LernMoreInnerText}><p>Learn more about this...</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.imagesContainer} id="imagesContainer">
                    <Link>
                        <div className={styles.imgWrapper}>
                            <img ref={el => imageRefs.current[5] = el} src="src/assets/1.jpg" alt="" />
                            <div className={styles.innerWrapper} style={{ width: imageWidths[5] }}>
                                <div className={styles.overlayText}>
                                    <div className={styles.headInnerText}><h1>Some Header</h1></div>
                                    <div className={styles.LernMoreInnerText}><p>Learn more about this...</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.imgWrapper}>
                            <img ref={el => imageRefs.current[6] = el} src="src/assets/17.jpg" alt="" />
                            <div className={styles.innerWrapper} style={{ width: imageWidths[6] }}>
                                <div className={styles.overlayText}>
                                    <div className={styles.headInnerText}><h1>Some Header</h1></div>
                                    <div className={styles.LernMoreInnerText}><p>Learn more about this...</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.imgWrapper}>
                            <img ref={el => imageRefs.current[7] = el} src="src/assets/3.jpg" alt="" />
                            <div className={styles.innerWrapper} style={{ width: imageWidths[7] }}>
                                <div className={styles.overlayText}>
                                    <div className={styles.headInnerText}><h1>Some Header</h1></div>
                                    <div className={styles.LernMoreInnerText}><p>Learn more about this...</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.imgWrapper}>
                            <img ref={el => imageRefs.current[8] = el} src="src/assets/20.jpg" alt="" />
                            <div className={styles.innerWrapper} style={{ width: imageWidths[8] }}>
                                <div className={styles.overlayText}>
                                    <div className={styles.headInnerText}><h1>Some Header</h1></div>
                                    <div className={styles.LernMoreInnerText}><p>Learn more about this...</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={styles.imgWrapper}>
                            <img ref={el => imageRefs.current[9] = el} src="src/assets/5.jpg" alt="" />
                            <div className={styles.innerWrapper} style={{ width: imageWidths[9] }}>
                                <div className={styles.overlayText}>
                                    <div className={styles.headInnerText}><h1>Some Header</h1></div>
                                    <div className={styles.LernMoreInnerText}><p>Learn more about this...</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
           <div className={style.contactPageWrapper}>
                <h1>Want to work together?</h1>
                <p>Contact me !</p>
                <p className={style.email}>email@example.com</p>
           </div>

            <Footer />
        </>
    );
}
