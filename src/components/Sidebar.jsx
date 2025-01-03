import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/51023050?v=4"
        />
        <strong>Afonso Lima</strong>
        <span>Software Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit Profile
        </a>
      </footer>
    </aside>
  );
}
