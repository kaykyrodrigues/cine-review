import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import movies from "../../json/movies.json";

function Form() {
  const navigate = useNavigate();

  function catchValue(e) {
    e.preventDefault();
    const movieTitle = e.target.movieTitle.value;
    console.log(movieTitle);

    const movie = movies.find(
      (m) => m.title.toLowerCase() === movieTitle.toLowerCase()
    );
    if (!movie) {
      alert("Filme não encontrado!");
    } else {
      navigate(`/review/${movie.id}`);
    }
  }

  return (
    <form onSubmit={catchValue} className={styles.form}>
      <input type="review" name="movieTitle" />
      <button type="submit">
        <img src="/images/search-logo.png" alt="Search logo" />
      </button>
    </form>
  );
}

export default Form;
