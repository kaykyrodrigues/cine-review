import Header from "../../components/Header";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <>
        <Header />
      <section className={styles.container}>
        <article>
          <h1>Error 404!</h1>
          <h2>Ops! Content not found!</h2>
        </article>
      </section>
    </>
  );
}

export default PageNotFound;
