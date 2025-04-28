import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Feel free to contact us at anytime!</p>
        <p>Greg & Jessica Hill</p>
        <p>
          <a href="tel:+13375011950">
            <u>337-501-1950</u>
          </a>
        </p>
      </div>
      <div>
        <p>OFFICE HOURS</p>
        <p>MONDAY - FRIDAY</p>
        <p>8am - 5pm</p>
      </div>
    </footer>
  );
};

export default Footer;
