import LoginButton from "../LoginButton";
import styles from "./Banner.module.css";

function Banner({ img }) {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url('/images/${img}-banner.jpg')` }}
    >
      <article>
          <h1>Review movies, series and more, unlimited</h1>
          <p>Write what you think and review what you're watching here in our catalog</p>
          <LoginButton />
      </article>
    </section>
  );
}

export default Banner;
