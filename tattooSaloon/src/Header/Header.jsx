import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiAlignRight, FiXCircle, FiChevronDown } from 'react-icons/fi'
import styles from './Header.module.css'
export default function Header() {
    const [toggled, setToggled] = useState(false);
 
        const handleDropdownClick = () => {
            setToggled(!toggled);
        };
   
    

    return (
        <header>
            <div className={styles.headerWrapper} style={{height:`${toggled ? '240px' : '60px'}`}}>
                <div className={styles.headerInner}>
                    <div className={styles.logoWrapper}><Link to="/"> <img src="/v-alphabet-icon.svg" alt="The logo" /></Link>
                        <button className={styles.navbarToggle} id="toggleButton" onClick={handleDropdownClick}><FiAlignRight /></button></div>
                    <div className={styles.linksWrapper}>
                        <Link to="/about" className={`${styles.links} ${toggled ? styles.toggled1  : ''}`}>About us</Link>
                        <Link to="/catalog" className={`${styles.links} ${toggled ? styles.toggled2 : ''}`} style={{ fontWeight: "700" }}>Catalog</Link>
                        <Link to="/contact" className={`${styles.links} ${toggled ? styles.toggled3 : ''}`}> Contact us</Link>
                    </div>
                </div>
            </div>
        </header>

    )
}