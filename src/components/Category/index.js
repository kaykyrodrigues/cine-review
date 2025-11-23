import styles from "./Category.module.css";
import movies from "../../json/movies.json";

export const categories = ["TRENDING NOW"];

export function filterCategory(id) {
  return movies.filter((movie) => movie.category[0] === categories[id]);
}

function Category({ category, children }) {
  return (
    <>
      <section className={styles.category}>
        <p>{category}</p>
        <div>{children}</div>
      </section>
    </>
  );
}

export default Category;
