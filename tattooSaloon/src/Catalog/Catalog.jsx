import Header from "../Header/Header";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import styles from "./Catalog.module.css"
import Item from "./Item";
import { BiSearch } from "react-icons/bi";

export default function Catalog(){
    return(
        <>
        <Header></Header>
        <Container src="src/assets/cut@0,5x.png" height={250} justify="center">
            <div className={styles.searchContainer}>
                <form action="search">
                    <input type="text" className={styles.search} placeholder="Search" />
                    </form>
                <button className={styles.searchBtn}> <BiSearch></BiSearch></button>

            </div>
        </Container>
        <div className={styles.cardsWrapper}>
            {/* Use props to display the required text */}
            {/* <Item title="title1" date="JUL 30" timeSpent={6}></Item> */}
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>


        </div>
        <Footer></Footer>
        </>
    )
}