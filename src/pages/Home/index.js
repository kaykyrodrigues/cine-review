import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category, {
  categories,
  filterCategory,
} from "../../components/Category";
import styles from "./Home.module.css";
import Form from "../../components/Form";
import Carousel from "../../components/Carousel";

function Home() {
  return (
    <>
      <section className={styles.home}>
        <Header>
          <Form />
        </Header>
        <Banner img="background" />
        <Container>
          {categories.map((category, index) => (
            <Category category={category}>
              <Carousel>
                {filterCategory(index).map((movie) => (
                  <Card cover={movie.cover} id={movie.id} key={movie.id} />
                ))}
              </Carousel>
            </Category>
          ))}
        </Container>
        <Footer />
      </section>
    </>
  );
}

export default Home;
