import styles from "./OurMission.module.css";

const OurMission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="/images/vision-placeholder.png" />
      </div>
      <div className={styles.label}>
        <h2>Our Mission</h2>
        <p>
          The University shall provide higher and advanced vocational,
          technical, industrial, technological and professional education and
          training in industries and technology, and in practical arts leading
          to certificates, diplomas and degrees.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
