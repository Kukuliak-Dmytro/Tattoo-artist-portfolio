import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignRight } from 'react-icons/fi';
import styles from './Header.module.css';

import vIcon from '../assets/v-alphabet-icon.svg';

export default function Header() {
    const [toggled, setToggled] = useState(false);
    const [isWide, setIsWide] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsWide(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDropdownClick = () => {
        setToggled(!toggled);
    };

    return (
        <>
        <header>
            <div className={styles.headerWrapper} style={{ height: `${toggled ? '240px' : '60px'}` }}>
                <div className={styles.headerInner}>
                    <div className={styles.logoWrapper}>
                        <Link to="/Tattoo-artist-portfolio/"> <img src={vIcon} alt="The logo" /></Link>
                        <button className={styles.navbarToggle} id="toggleButton" onClick={handleDropdownClick}><FiAlignRight /></button>
                    </div>
                    <div className={styles.linksWrapper}>
                        <Link
                            to="/Tattoo-artist-portfolio/about"
                            className={`${styles.links} ${toggled ? styles.toggled1 : ''}`}
                            style={{ pointerEvents: `${toggled || isWide ? 'all' : 'none'}` }}
                        >
                            About us
                        </Link>
                        <Link
                            to="/Tattoo-artist-portfolio/catalog/1"
                            className={`${styles.links} ${toggled ? styles.toggled2 : ''}`}
                            style={{ fontWeight: "700", pointerEvents: `${toggled || isWide ? 'all' : 'none'}` }}
                        >
                            Catalog
                        </Link>
                        <Link
                            to="/Tattoo-artist-portfolio/contact"
                            className={`${styles.links} ${toggled ? styles.toggled3 : ''}`}
                            style={{ pointerEvents: `${toggled || isWide ? 'all' : 'none'}` }}
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        <div style={{width:"100%", height:"60px"}}></div>
        </>
    );
}
