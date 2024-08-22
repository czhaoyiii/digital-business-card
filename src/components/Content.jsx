import styles from "./content.module.css";

export default function About() {
  return (
    <div className={styles.contentWrapper}>
      <h2>About</h2>
      <p>
        I'm a Computer Science undergraduate at Nanyang Technological
        University. I enjoy translating innovative ideas into practical
        impactful solutions. My dedication to continuous learning and innovation
        drives me to seek opportunities where I can apply my skills to
        real-world challenges. Currently, I'm undergoing my internship as a
        Cloud Engineer to actively improve my programming knowledge.
      </p>
      <h2 className={styles.interest}>Interests</h2>
      <p>
        Outside of programming, I would often see myself socialising with
        individuals from different industries which has allowed me to build a
        small network of friends from all walks of life.
      </p>
    </div>
  );
}
