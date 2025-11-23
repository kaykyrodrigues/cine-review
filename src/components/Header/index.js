import Form from "../Form";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src="/images/logo.png" alt="Logo da imagem" />
      </Link>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/catalog">CATALOG</Link>
      </nav>
      <Form />
    </header>
  );
}

export default Header;
