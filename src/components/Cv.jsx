//COMPONENTS
import { Link } from "react-router-dom";
import { useState } from "react";
import ListItemLink from "./ListItemLink";
import useClickOutside from "../customHooks/ClickOutside";

//STYLES
import styles from "../styles/Cv.module.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import bild from "../assets/bild.jpg"

const Cv = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const domNode = useClickOutside(() => {
    setIsNavOpen(false);
  });

  return (
    <div className={styles.container}>
      {/* BURGER */}
      <div
        className={styles.burgerContainer}
        onClick={() => setIsNavOpen(true)}
      >
        <FaBars />
      </div>

      {/* CONTENT */}
      <div
        className={`${styles.content} ${isNavOpen ? styles.active : undefined}`}
        ref={domNode}
      >
        {/* CLOSE BURGER */}
        <div
          className={styles.burgerContainer}
          onClick={() => setIsNavOpen(false)}
        >
          <FaTimes />
        </div>

        <div className={styles.imageContainer}>
          <img src={bild} alt="A picture of me" />
        </div>
        <div className={styles.moreInfo}>
          <h2>Svante Pålsson</h2>
          <h3>Web Developer</h3>

          <ul className={styles.nav2}>
            {/* HOME */}
            <ListItemLink url="" clickHandler={() => setIsNavOpen(false)}>
              <span>Home</span>
            </ListItemLink>

            {/* ABOUT ME */}
            <ListItemLink url="about" clickHandler={() => setIsNavOpen(false)}>
              <span>About Me</span>
            </ListItemLink>

            {/* RESUME */}
            <ListItemLink url="resume" clickHandler={() => setIsNavOpen(false)}>
              <span>Resume</span>
            </ListItemLink>

            {/* PORTOFOLIO */}
            <ListItemLink
              url="portofolio"
              clickHandler={() => setIsNavOpen(false)}
            >
              <span>Portofolio</span>
            </ListItemLink>

            {/*  BLOG */}
            <ListItemLink url="blog" clickHandler={() => setIsNavOpen(false)}>
              <span>Blog</span>
            </ListItemLink>

            {/* CONTACT */}
            <ListItemLink
              url="contact"
              clickHandler={() => setIsNavOpen(false)}
            >
              <span>Contact</span>
            </ListItemLink>
          </ul>

          <div className={styles.socials}>
            <Link to="#">
              <FaLinkedinIn />
            </Link>
            <Link to="#">
              <FaFacebookF />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
          </div>

          <Link to="#" className={styles.button}>
            <span>Download Cv</span>
          </Link>
        </div>

        <div className={styles.copyright}>
          <span>© 2020 All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Cv