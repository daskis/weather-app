import React from 'react';
import styles from './Navbar.module.scss';
import SideMenuTag from "../SIdeMenuTag/SideMenuTag";

interface NavbarProps {
    logo: string;
    links: React.ReactNode[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>{logo}</div>
            <div className={styles.navbarLinks}>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.navbarBurger}>
                <SideMenuTag>{links}</SideMenuTag>
            </div>
        </nav>
    );
};

export default Navbar;
