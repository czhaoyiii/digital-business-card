import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://twitter.com/home" target="_blank">
        <i className="fa-brands fa-x-twitter"></i>
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="https://github.com/czhaoyiii" target="_blank">
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
}
