import Content from "./Content";
import styles from "./card.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className={styles.card}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
