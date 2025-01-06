import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div>
      <img src="https://github.com/afonsolimajr.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="2025-01-03 16:35:30" dateTime="2025-01-03 16:35:30">
                Publicado há algum tempo
              </time>
            </div>
            <button title="Deletar">
              <Trash size={20} />
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
