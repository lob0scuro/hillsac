import styles from "../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/plans">Plans</NavLink>
        <a href="tel:+13375011950">
          <FontAwesomeIcon icon={faPhone} />
          <span className={styles.callUs}>Call us!</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
