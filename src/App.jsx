import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Afonso Lima" content="Conteudo do author" />

          <Post author="André Silva" content="Conteudo do author" />
        </main>
      </div>
    </div>
  );
}

export default App;
