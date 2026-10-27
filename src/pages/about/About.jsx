import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaNodeJs,
} from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import profile from '../../assets/My_picture.jpeg';
import styles from './About.module.css';

const skills = [
  { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', Icon: FaJs, color: '#F0B90B' },
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'Python', Icon: FaPython, color: '#3776AB' },
  { name: 'Django', Icon: SiDjango, color: '#0C4B33' },
  { name: 'SQL', Icon: FaDatabase, color: '#44A2E5' },
  { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', Icon: FaGithub, color: '#24292F' },
  { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
];

const About = () => {
  return (
    <article className={styles.about}>
      <header className={styles.intro}>
        <div>
          <h1 className={styles.heading}>
            Hey there<span className={styles.punct}>!</span>
          </h1>
          <p className={styles.lead}>
            My name is Noor Shurrab. I'm a Full-Stack Developer creating modern, 
            high-performance web applications with a focus on clean design, 
            thoughtful user experiences, and solid engineering.
          </p>
        </div>
        <img src={profile} alt="Noor Shurrab" className={styles.photo} />
      </header>

      <div className={styles.divider} />

      <section>
        <h2 className={styles.heading2}>
          Technical Skills<span className={styles.punct}>.</span>
        </h2>

        <div className={styles.marquee}>
          <ul className={styles.track}>
            {[...skills, ...skills].map((s, i) => (
              <li
                key={`${s.name}-${i}`}
                className={styles.skill}
                aria-hidden={i >= skills.length}
              >
                <s.Icon color={s.color} size={34} />
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.text}>
          I studied Computer Systems Engineering at Al-Azhar University, then
          completed a full-stack web development bootcamp at Axsos Academy. I
          enjoy working across the stack, from designing data models to building
          interfaces people actually enjoy using.
        </p>
      </section>

      <section>
        <h2 className={styles.heading2}>
          My Story<span className={styles.punct}>...</span>
        </h2>
        <p className={styles.text}>
          Engineering provided the strong foundation, and my transition 
          into intensive web development made me a builder. I love taking 
          an idea from data modeling and API integration all the way to
          responsive front-end UI.   Having worked on diverse applications
          with tools like React, Python, and SQL, I focus on writing clean, 
          scalable code. I’m now seeking my first role as a Junior Full-Stack 
          Developer where I can keep growing and build impactful products.
        </p>
      </section>
    </article>
  );
};

export default About;