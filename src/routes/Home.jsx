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
      <img className="logo" src={Logo} alt="Hill's A/C logo" />
      <div className={styles.contactBlock}>
        <ul>
          <li>
            <a href="tel:+13375011950">
              <FontAwesomeIcon icon={faPhone} /> <span>(337) 501-1950</span>
            </a>
          </li>
          <li>
            <a href="mailto:greghillac@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span>greghillac@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="mailto:jessicahillac@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span>jessicahillac@gmail.com</span>
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
