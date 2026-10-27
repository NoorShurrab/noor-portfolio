import { Link } from 'react-router-dom';
import { FaGithub, FaClipboardList } from 'react-icons/fa';
import { FiExternalLink, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { projects } from '../../data/projects';
import styles from './Work.module.css';
import ImageSlider from './ImageSlider'; 


const Work = () => {
    return (
        <section className={styles.work}>
            <div className={styles.container}>
                <div className={styles.titleRow}>
                    <h2 className={styles.title}>
                        What I've Done<span className={styles.dot}></span>
                    </h2>
                    <FaClipboardList className={styles.titleIcon} />
                </div>

                {projects.map((project) => (
                    <article key={project.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            {project.label && (
                            <span className={styles.featured}>{project.label}</span>
                        )}
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                        </div>

                            <ImageSlider slides={project.slides} title={project.title} />

                        <div className={styles.cardFooter}>
                            <ul className={styles.tech}>
                                {project.tech.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>

                            <div className={styles.icons}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                        <FaGithub />
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                                        <FiExternalLink />
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Work;