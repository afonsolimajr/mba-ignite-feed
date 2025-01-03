import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="" />
          <div className={styles.authorInfo}>
            <strong>Afonso Lima</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title="2025-01-03 16:35:30" datetime="2025-01-03 16:35:30">
          Publicado há algum tempo
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>{" "}
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
