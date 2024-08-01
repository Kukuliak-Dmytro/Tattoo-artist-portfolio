import Container from "../Container/Container";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styles from './Contact.module.css'
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

import imgCnt from '../assets/search.png';


    
export default function Contact(){
    const [alertText, setAlertText] = useState('Copy email?');

    const handleClick = () => {
        setAlertText('Copied to clipboard!');
        navigator.clipboard.writeText("hello@example.com");
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setAlertText('Copy email?');
        }, 300);
    };
      return(
        <>      
        <Header/>
        <Container src={imgCnt} height={1080}>
        <div className={styles.contactWrapper}>
            <div className={styles.headerWrapper}>
                <div className={styles.leftPart}>
                    <h1>Let`s work together</h1>
                    <h3>Leave your contact info via the form, or get in touch via my email:</h3>
                </div>
                <div className={styles.rightPart}>
                  <div className={styles.emailCard}
                    onClick={handleClick}
                    onMouseLeave={handleMouseLeave}
                    >
                    <div>
                        <h1>Email</h1>
                        <p>hello@example.com</p>                        
                    </div>
                    <div ><MdEmail/></div>
                  </div>
                  <div className={`${styles.emailAlert}`}>{alertText}</div>

                </div>
            </div>
            <div className={styles.formWrapper}>
                <form>
                    <div className={styles.groupWrapper}>
                        <div className={styles.pairWrapper}>
                            <label htmlFor="name">Name</label>
                            <input type="text"  id="name" />
                        </div>
                        <div  className={styles.pairWrapper}>
                            <label htmlFor="email">Email address</label>
                            <input type="text" id="email" />
                        </div>
                    </div>
                    <div className={styles.groupWrapper}>
                    <div  className={styles.pairWrapper}>
                            <label htmlFor="phone">Phone</label>
                            <input type="text"  id="phone" />
                        </div>
                        <div  className={styles.pairWrapper}>
                            <label htmlFor="title">Title of the message</label>
                            <input type="text"  id="title" />
                        </div>
                    </div>
                    <div className={styles.pairWrapper} >
                        <label htmlFor="letterContent">Message</label>
                        <textarea id="letterContent"></textarea>
                    </div>

                </form>
            </div>
            <Link><button className={styles.submitBtn}>Submit</button></Link>
        </div>
        </Container>
        <Footer/>
        </>
    )
}
