import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/dsenvolva.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="2025-01-03 16:35:30" dateTime="2025-01-03 16:35:30">
                Publicado há algum tempo
              </time>
            </div>
            <button title="Deletar">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
