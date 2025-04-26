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
            <FontAwesomeIcon icon={faPhone} /> <span>337-501-1950</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>greghillac@gmail.com</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>jessicahillac@gmail.com</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />{" "}
            <span>https://www.facebook.com/GregHillAC</span>
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
