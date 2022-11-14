import Button from "./Button";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/images/tupclogo.png" />
      </div>
      <div className={styles.navbarActions}>
        <Link href="/careers">
          <Button variant="secondary">Careers</Button>
        </Link>
        <Button variant="secondary">Admission</Button>
        <Button variant="secondary">Registrar</Button>
        <Button variant="secondary">Contact us</Button>
        <Button variant="primary">Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
