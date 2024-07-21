import styles from './Footer.module.css'
export default function Footer(){
    return(
        <footer>
        <div className={styles.footerWrapper}>
            <div className={styles.upperHalf}>
                <ul>
                    <a href="#">
                        <li>Instagram</li>
                    </a>
                    <a href="#">
                        <li>Facebook</li>
                    </a>
                    <a href="#">
                        <li> Be Real</li>
                    </a>
                    <a href="#">
                        <li>Linked In</li>
                    </a>
                </ul>
            </div>
            <div className={styles.lowerHalf}>© {new Date().getFullYear()}, Valentine</div>
        </div>
        </footer>
    )
}