import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { links } from '../../data/links';

const Header = ({ locked }) => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`${styles.header} ${locked ? styles.locked : ''}`}>
            <div className={styles.logo}>
                <Link to="/" onClick={() => setOpen(false)}>
                    <h1>Portfolio</h1>
                </Link>
            </div>

            <button
                className={styles.menuBtn}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                {open ? '✕' : '☰'}
            </button>

            <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
                <ul className={styles.list}>
                    {links.map((link) => (
                        <li key={link.url}>
                            <NavLink
                                to={link.url}
                                end={link.url === '/'}
                                className={({ isActive }) => (isActive ? styles.active : '')}
                                onClick={() => setOpen(false)}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;