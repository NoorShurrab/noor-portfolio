import { useState, useEffect } from "react";
//import './App.css'
import Header from "./components/header/Header";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { links } from "./data/links";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";

const indexOf = (path) => links.findIndex((l) => l.url === path);

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [phase, setPhase] = useState("idle"); // 'idle' | 'out' | 'in'
  const [dir, setDir] = useState(1);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setDir(
        indexOf(location.pathname) > indexOf(displayLocation.pathname) ? 1 : -1,
      );
      setPhase("out");
    }
  }, [location.pathname, displayLocation.pathname]);

  const handleAnimationEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (phase === "out") {
      setDisplayLocation(location);
      setPhase("in");
    } else if (phase === "in") {
      setPhase("idle");
    }
  };

  const index = indexOf(location.pathname);
  const busy = phase !== "idle";

  return (
    <div className={styles.stage}>
      <Header locked={busy} />

      <section
        className={`${styles.page} ${styles[phase]}`}
        style={{ "--dir": dir }}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className={styles.content}>
          <Routes location={displayLocation}>
            <Route path="/" element={<Home ready={phase === "idle"} />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </section>

      {index > 0 && (
        <button
          className={`${styles.arrow} ${styles.left}`}
          disabled={busy}
          onClick={() => navigate(links[index - 1].url)}
          aria-label="Previous page"
        >
          <FiArrowLeft />
        </button>
      )}

      {index < links.length - 1 && (
        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
          disabled={busy}
          onClick={() => navigate(links[index + 1].url)}
          aria-label="Next page"
        >
          <FiArrowRight />
        </button>
      )}
    </div>
  );
}

export default App;
