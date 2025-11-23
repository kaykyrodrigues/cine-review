import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Review.module.css";
import movies from "../../json/movies.json";

function Review() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return (
      <>
        <Header />
        <section className={styles.review}>
          <Container>
            <h2>Filme não encontrado!</h2>
          </Container>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
      <img src={movie.banner} alt="Movie banner" className={styles.banner}/>
        <section className={styles.info}>
          <article className={styles.left}>
            <h2>{movie.title}</h2>
            <p>{movie.date}</p>
            <p>
              Directed by <span>{movie.director}</span>
            </p>
            <img className={styles.img} src={movie.cover} alt="Movie cover" />
          </article>
          <article className={styles.right}>
            <p>{movie.synopsis}</p>
            <iframe
              width="350"
              height="200"
              src={`https://www.youtube.com/embed/${movie.id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </article>
        </section>
        <section className={styles.review}>

            <form className={styles.text}>
              <label>REVIEW HERE</label>
              <input type="text" />
              <button>LOG IN TO REVIEW</button>
              <button>SHARE</button>
            </form>

        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Review;
