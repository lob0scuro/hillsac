import styles from "../styles/Plans.module.css";
import Logo from "../assets/acLogo.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Plans = () => {
  const [openPlan, setOpenPlan] = useState(null); // Keeps track of which plan is open

  const togglePlan = (plan) => {
    setOpenPlan(openPlan === plan ? null : plan); // Toggle the selected plan
  };

  return (
    <>
      <div className={styles.plansTextBlock}>
        <h1 className={styles.plansHeader}>
          ANNUAL & SEMI-ANNUAL MAINTENANCE PLANS
        </h1>
        <p>
          Why repair your air conditioner when you can prevent an expensive
          breakdown in the first place?
        </p>
        <br />
        <p>
          All the damage your AC unit sustains stems from wear and tear that has
          been neglected for too long. Without the proper upkeep, even something
          as small as a dusty filter can cause damage on the rest of the unit.
          That’s why HVAC technicians everywhere continuously encourage
          homeowners to schedule regular A/C semi-annual maintenance.
        </p>
        <br />
        <p>
          At Hills A/C we provide maintenance services for every make and model
          of A/C systems available. No matter how old your air conditioner is, a
          little TLC from one of our professional technicians can go a long way.
          You’ll be surprised at how much more efficient and powerful your air
          conditioner will become after just one yearly service.
        </p>
        <br />
        <p>
          Are you ready to get started? Contact us today to schedule your annual
          or semi-annual air conditioner maintenance service. Let us help
          restore your peace of mind and help keep your A/C system alive.
        </p>
        <br />
        <div className={styles.planModels}>
          <h2>View our plans below!</h2>
          <div className={styles.bluePlan}>
            <h4 onClick={() => togglePlan("blue")}>
              Blue Plan ($185)&nbsp;{" "}
              <FontAwesomeIcon
                icon={openPlan === "blue" ? faChevronUp : faChevronDown}
              />
            </h4>
            {openPlan === "blue" && (
              <ul>
                <p>** 1 visit a year **</p>
                <li>Adjusting the burner assembly</li>
                <li>Cleaning the ignition assembly</li>
                <li>Cleaning the heat exchanger</li>
                <li>Monitoring the flue draft</li>
                <li>Testing the starting capabilities</li>
                <li>Testing the safety controls</li>
                <li>Cleaning/Replacing the air filters</li>
                <li>Adjusting the blower components</li>
                <li>Measuring for correct air flow</li>
                <li>Tightening electrical connections</li>
                <li>Measuring volts/amps</li>
                <li>Lubricating all moving parts</li>
                <li>Adjusting the thermostat's calibration</li>
                <li>Cleaning the evaporator coil if accessible</li>
                <li>Cleaning the condenser coil</li>
                <li>Cleaning the condensate drain and pan</li>
                <li>Measuring temperature difference</li>
              </ul>
            )}
          </div>
          <div className={styles.redPlan}>
            <h4 onClick={() => togglePlan("red")}>
              Red Plan ($225)&nbsp;{" "}
              <FontAwesomeIcon
                icon={openPlan === "red" ? faChevronUp : faChevronDown}
              />
            </h4>
            {openPlan === "red" && (
              <ul>
                <p>** 2 visits a year **</p>
                <li>
                  Includes everything in the{" "}
                  <span className={styles.blueInRed}>Blue Plan</span>{" "}
                  <b className={styles.plusSign}>+</b>
                </li>
                <li>
                  Reduced dispatch charge to $49{" "}
                  <small>(Normal charge is $95)</small>
                </li>
                <li>10% discount on HVAC parts</li>
                <li>No extra fee for after hours</li>
                <li>ER Repairs</li>
                <li>
                  $50 credit for every year you are a member of the{" "}
                  <i>RED Tier Maintenance Plan</i>
                </li>
                <li>
                  This credit can be used towards any upgrade to your system, up
                  to $500
                </li>
              </ul>
            )}
          </div>
        </div>
        <br />
        <br />
        <img className="logo" src={Logo} alt="" />
      </div>
    </>
  );
};

export default Plans;
