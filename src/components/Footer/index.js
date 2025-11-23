import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/">CATALOG</Link>
          <Link to="/">REVIEWS</Link>
          <Link to="/">CONTACT</Link>
        </nav>
        <p>&copy; CineRV it is a project for educational purposes</p>
      </footer>
    </>
  );
}

export default Footer;
