import styles from "../styles/Home.module.css";
import Logo from "../assets/acLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <img className="logo home-logo" src={Logo} alt="Hill's A/C logo" />
      <div className={styles.infoBlock}>
        <div className={styles.servicesBlock}>
          <ul>
            <li>A/C & Heating Repairs</li>
            <li>Maintenance</li>
            <li>Installation</li>
            <li>Commercial Refrigeration</li>
          </ul>
        </div>
        <div className={styles.contactBlock}>
          <ul>
            <li>
              <a href="mailto:greghillac@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> <span>Email Greg</span>
              </a>
            </li>
            <li>
              <a href="mailto:jessicahillac@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <span>Services & Payment Email</span>
              </a>
            </li>
            <li
              onClick={() =>
                (window.location.href = "https://www.facebook.com/GregHillAC")
              }
            >
              <FontAwesomeIcon icon={faFacebook} />{" "}
              <span>
                Like us on <u>Facebook</u>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contactForm}>
        <h3>Contact Us</h3>
        <form method="post">
          <div>
            <div>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name*"
              />
            </div>
            <div>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name*"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address*"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number*"
              />
            </div>
          </div>
          <div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Message*"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
