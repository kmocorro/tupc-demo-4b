import styles from "./OurVision.module.css";

const OurVision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <h2>Our Vision</h2>
        <p>
          TUP: A premier state university with recognized excellence in
          engineering and technology education at par with leading universities
          in the ASEAN region.
        </p>
      </div>
      <div className={styles.image}>
        <img src="/images/vision-placeholder.png" />
      </div>
    </div>
  );
};

export default OurVision;
