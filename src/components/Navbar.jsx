import styles from "../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/plans">Plans</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
