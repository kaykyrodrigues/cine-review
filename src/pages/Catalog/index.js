import Container from "../../components/Container";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import styles from "./Catalog.module.css";
import movies from "../../json/movies.json";

function Catalog() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.catalog}>
          <MovieList movies={movies} />
        </section>
      </Container>
    </>
  );
}

export default Catalog;
