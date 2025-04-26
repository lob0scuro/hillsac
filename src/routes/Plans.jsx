import styles from "../styles/Plans.module.css";
import Logo from "../assets/acLogo.svg";

const Plans = () => {
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
        <br />
        <img className="logo" src={Logo} alt="" />
      </div>
    </>
  );
};

export default Plans;
