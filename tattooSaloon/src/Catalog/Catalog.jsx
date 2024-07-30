import Header from "../Header/Header";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import styles from "./Catalog.module.css"
import Item from "./Item";
import { BiSearch } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Catalog(){
      const {pageNo}= useParams()
      const imagesArray=[
        [1,2,3,4,5,6,7,8,9,10,11,12],
        [13,14,15,16,17,18,19,20,21,22,23,24],
        [25,26,27,28,29,30,31,32,33,34,35,36],
        [37,38,39,40,41,42,43,44,45,46,47,48]
      ]  
    return(
        <>
        <Header></Header>
        <Container src="/src/assets/cut@0,5x.png" height={250} justify="center">
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
            <Item src={`/src/assets/${imagesArray[pageNo-1][0]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][1]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][2]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][3]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][4]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][5]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][6]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][7]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][8]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][9]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][10]}.jpg`}></Item>
            <Item src={`/src/assets/${imagesArray[pageNo-1][11]}.jpg`}></Item>

        </div>
        <div className={styles.buttonsWrapper}>
            <Link to='/catalog/1'><button className={`${styles.pageBtn} ${pageNo==1 ? styles.active: ''}`} onClick={ ()=>{window.scrollTo(0, 0)}}>1</button></Link>
            <Link to='/catalog/2'><button className={`${styles.pageBtn} ${pageNo==2 ? styles.active: ''}`} onClick={ ()=>{window.scrollTo(0, 0)}}>2</button></Link>
            <Link to='/catalog/3'><button className={`${styles.pageBtn} ${pageNo==3 ? styles.active: ''}`} onClick={()=>{ window.scrollTo(0, 0)}}>3</button></Link>
            <Link to='/catalog/4'><button className={`${styles.pageBtn} ${pageNo==4 ? styles.active: ''}`} onClick={()=>{ window.scrollTo(0, 0)}}>4</button></Link>
        </div>
        <Footer></Footer>
        </>
    )
}