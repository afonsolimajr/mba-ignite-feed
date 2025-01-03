import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <div className={styles.profile}>
        <strong>Afonso Lima</strong>
        <span>Software Developer</span>
      </div>
      <footer>
        <a href="#">Edit Profile</a>
      </footer>
    </aside>
  );
}