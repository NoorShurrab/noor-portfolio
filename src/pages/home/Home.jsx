import { lazy, Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Hero3D = lazy(() => import('../../components/Hero3D/Hero3D'));

const Home = ({ ready }) => {
    const [show3D, setShow3D] = useState(false);

    useEffect(() => {
        if (ready) setShow3D(true);
    }, [ready]);

    return (
        <>
        {show3D && (
            <Suspense fallback={null}>
            <Hero3D />
            </Suspense>
        )}

        <div className={styles.home}>

            <h1 className={styles.title}>
            I'm <span className={styles.name}>Noor Shurrab</span>
            <br />
            A Full Stack Developer
            </h1>

            <p className={styles.bio}>
            Building modern web applications where clean code meets seamless design.
            I love transforming ideas into reliable, 
            intuitive, and engaging digital experiences that connect people with purpose.
            </p>

            <div className={styles.buttons}>
            <Link to="/contact" className={`${styles.btn} ${styles.primary}`}>
                Contact Me
            </Link>
            <a
                href="https://docs.google.com/document/d/15uEVIN8Hn-h4QHAB6m8LCE-Rk6h6OWBI3waTdgKAMAY/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.outline}`}
            >
                My CV
            </a>
            </div>
        </div>
        </>
    );
};

export default Home;