import styles from "./header.module.css";
import profilePic from "../assets/zhaoyiPic.jpg";

export default function Header() {
  return (
    <div>
      <img src={profilePic} alt="" className={styles.profilePic} />
      <div className={styles.headerWrapper}>
        <h1>Chan Zhao Yi</h1>
        <h3>Cloud Engineer Intern</h3>
        <a href="" className={styles.website}>
          zhaoyi.website
        </a>
        <div className={styles.buttonWrapper}>
          <a className={styles.emailBtn} href="mailto:zz_zhao_yi@hotmail.com">
            <i className="fa-solid fa-envelope"></i> <span>Email</span>
          </a>
          <a
            className={styles.linkedinBtn}
            href="https://www.linkedin.com/in/zhaoyi-chan/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
