import Container from "../Container/Container";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styles from './Contact.module.css'
export default function Contact() {
    return (
        <>
            <Header />
            <Container src='src/assets/search.png' height={1200}>
                <div className={styles.contactWrapper}>
                    <div className={styles.headerWrapper}>
                        <div className={styles.leftPart}>
                            <h1>Let`s work together</h1>
                            <h3>Leave your contact info via the form, or get in touch via my email:</h3>
                            <p>hello@example.com</p>
                        </div>
                        <div className={styles.rightPart}>
                            <h1>Let`s work together</h1>
                            <h3>Leave your contact info via the form, or get in touch via my email:</h3>
                            <p>hello@example.com</p>
                        </div>
                    </div>
                    <div className={styles.formWrapper}>
                        <form>
                            <div className={styles.groupWrapper}>
                                <div className={styles.pairWrapper}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" />
                                </div>
                                <div className={styles.pairWrapper}>
                                    <label htmlFor="email">Email address</label>
                                    <input type="text" id="email" />
                                </div>
                            </div>
                            <div className={styles.groupWrapper}>
                                <div className={styles.pairWrapper}>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" id="phone" />
                                </div>
                                <div className={styles.pairWrapper}>
                                    <label htmlFor="title">Title of the message</label>
                                    <input type="text" id="title" />
                                </div>
                            </div>
                            <div className={styles.pairWrapper} >
                                <label htmlFor="letterContent">Message</label>
                                <textarea name="" id="letterContent"></textarea>
                            </div>

                        </form>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}
