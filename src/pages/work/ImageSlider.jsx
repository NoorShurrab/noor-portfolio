import { useState } from 'react';
import { MockFrame } from 'react-mockframe';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './ImageSlider.module.css';

const withBase = (path) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const ImageSlider = ({ slides, title }) => {
    const [index, setIndex] = useState(0);
    const slide = slides[index];

    const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

    return (
        <div className={styles.slider}>
            <div key={index} className={styles.stage}>
                {slide.laptop && (
                    <div className={styles.laptop}>
                        <MockFrame device="MacBook Pro" color="space-black">
                            <div className={`${styles.screen} ${styles.screenLaptop}`}>
                                <img src={withBase(slide.laptop)} alt={`${title} on laptop`} />
                            </div>
                        </MockFrame>
                    </div>
                )}

                {slide.tablet && (
                    <div className={styles.tablet}>
                        <MockFrame device="iPad Pro" color="space-black">
                            <div className={`${styles.screen} ${styles.screenTablet}`}>
                                <img src={withBase(slide.tablet)} alt={`${title} on tablet`} />
                            </div>
                        </MockFrame>
                    </div>
                )}

                {slide.phone && (
                    <div className={styles.phone}>
                        <MockFrame device="iPhone 17" color="space-black">
                            <div className={`${styles.screen} ${styles.screenPhone}`}>
                                <img src={withBase(slide.phone)} alt={`${title} on phone`} />
                            </div>
                        </MockFrame>
                    </div>
                )}
            </div>

            {slides.length > 1 && (
                <>
                    <button className={`${styles.btn} ${styles.prev}`} onClick={prev} aria-label="Previous">
                        <FiChevronLeft />
                    </button>
                    <button className={`${styles.btn} ${styles.next}`} onClick={next} aria-label="Next">
                        <FiChevronRight />
                    </button>

                    <div className={styles.dots}>
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
                                onClick={() => setIndex(i)}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageSlider;