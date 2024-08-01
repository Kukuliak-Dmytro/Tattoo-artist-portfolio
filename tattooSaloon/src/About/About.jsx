import Header from "../Header/Header";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import styles from './About.module.css'
import imgAbout from '.../assets/-2@0,33x.png';
import artistPhoto from '.../assets/photo_2023-10-09_15-04-34.jpg';



export default function About() {
    return (
    <>
        <Header></Header>
        <Container src={imgAbout} height={1080} justify="left">
            <div className={styles.outerWrapper}>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutImg}>
                        <img src={artistPhoto} alt="The photo of the artist"/>
                    </div>
                    <div className={styles.aboutDesc}>
                        <h1>Greetings!</h1>
                        <p className={styles.p1}>
                            Hello, I'm Valentine, a digital artist and tattoo designer. I live in Chernivtsi, Ukraine. I`ve been working with arts since I graduated college.
                        </p>
                        <p className={styles.p2}>
                        Growing up, I've had plenty of inspiration living in a house full of arts. This inspiration carried through the years and guided me to apply to arts school. And now I'm a freelancer doing gigs on the Internet
                        </p>
                
                    </div>
                </div>
               
            </div>
            
        </Container>
        <div className={styles.stats}>
                 <div className={styles.experience}>
                    <h3>Experience</h3>
                    <p>Designing and painting interiors</p>
                    <p>Drawing portraits</p>
                    <p>Designing digital tattoes</p>

                 </div>
                 <div className={styles.projects}>
                 <h3>Projects completed</h3>
                  <span><div> <p>2017-2020</p></div><div><p>23 projects</p></div> </span>
                  <span> <div><p> 2020-2021</p></div><div><p>30 portraits</p></div></span>
                  <span> <div> <p>2021-present</p></div><div><p>150 tattoes</p></div></span>
                  
                 </div>
                </div>
        <Footer></Footer>
    </>
    )
}