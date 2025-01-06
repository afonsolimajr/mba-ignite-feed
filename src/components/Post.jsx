import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="2025-01-03 16:35:30" dateTime="2025-01-03 16:35:30">
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
        <div className={styles.horizontal}>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </div>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
