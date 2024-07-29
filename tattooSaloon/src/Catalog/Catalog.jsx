import Header from "../Header/Header";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import styles from "./Catalog.module.css"
import { BiSearch } from "react-icons/bi";

export default function Catalog(){
    return(
        <>
        <Header></Header>
        <Container src="src/assets/cut@0,5x.png" height={200} justify="center">
            <div className={styles.searchContainer}>
                <form action="search">
                    <input type="text" className={styles.search} placeholder="Search" />
                    </form>
                <button className={styles.searchBtn}> <BiSearch></BiSearch></button>

            </div>
        </Container>
        <div className={styles.cardsWrapper}>

        </div>
        <Footer></Footer>
        </>
    )
}