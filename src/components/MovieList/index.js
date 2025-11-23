import Card from "../Card";
import Footer from "../Footer";
import styles from "./MovieList.module.css"

function MovieList({ movies, emptyHeading }) {

    const countMovies = movies.length;
    let heading = emptyHeading;

    if(countMovies > 0) {
        const noun = countMovies > 1 ? 'MOVIES' : 'MOVIE'
        heading = `${countMovies} ${noun} ON CATALOG`
    }

  return (
    <>
    <h2>{heading}</h2>
    <section className={styles.movies}>
        { movies.map((movie) => <Card id={movie.id} cover={movie.cover}/>) }
    </section>
    <Footer />
    </>
  );
}

export default MovieList;
