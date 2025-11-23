import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ id, cover }) {
  return (
    <section className={styles.card}>
      <Link to={`/review/${id}`}>
        <img src={cover} alt="Movie cover" />
      </Link>
      
    </section>
  );
}

export default Card;
