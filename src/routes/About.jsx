import styles from "../styles/About.module.css";
import Logo from "../assets/acLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className={styles.aboutTextBlock}>
        <h1 className={styles.aboutHeader}>Always a phone call away!</h1>
        <p>
          Is your air conditioning not keeping you cool enough when you need it
          the most?
        </p>
        <p>
          Are you noticing a spike in your energy bill for an unknown reason?
        </p>
        <p>Does your unit not turn on at all?</p>
        <br />
        <p>
          If any of these frustrating situations apply to you and your family,
          you can trust that Hills A/C is only a phone call away to properly
          restore your system.
        </p>
        <br />
        <br />
        <p>
          We’re proud to offer scheduled and emergency air conditioning repair
          services throughout the Southwest Louisiana Area.
        </p>
        <br />
        <p className={styles.c2a}>
          <FontAwesomeIcon icon={faPhone} /> Give us a call!
        </p>
        <br />
        <br />
        <img className="logo" src={Logo} alt="" />
      </div>
    </>
  );
};

export default About;
