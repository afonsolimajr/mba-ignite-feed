import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <h1>Hello World!</h1>
      <Post author="Afonso Lima" content="Conteudo do author" />

      <Post author="André Silva" content="Conteudo do author" />
    </>
  );
}

export default App;
