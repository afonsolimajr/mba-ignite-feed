import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/joaosilva.png",
      name: "João Silva",
      role: "Designer Gráfico",
    },
    content: [
      {
        type: "paragraph",
        content: "Oi pessoal, tudo bem?",
      },
      {
        type: "paragraph",
        content:
          "Lancei um novo design para um site e adoraria saber o que acham!",
      },
      {
        type: "link",
        content: "joaosilva.design/portfolio",
      },
    ],
    publishedAt: "2024-10-22 20:15:13",
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/mariacosta.png",
      name: "Maria Costa",
      role: "Gerente de Projetos",
    },
    content: [
      {
        type: "paragraph",
        content: "Olá, equipe!",
      },
      {
        type: "paragraph",
        content:
          "Quero compartilhar com vocês o progresso do nosso projeto mais recente. Estamos no caminho certo!",
      },
      {
        type: "link",
        content: "mariacosta.com/projetos",
      },
    ],
    publishedAt: "2024-10-23 14:45:32",
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/carlossouza.png",
      name: "Carlos Souza",
      role: "Analista de Dados",
    },
    content: [
      {
        type: "paragraph",
        content: "Pessoal, olhem isso!",
      },
      {
        type: "paragraph",
        content:
          "Acabei de finalizar a análise dos dados e os resultados estão muito interessantes. Quem se interessar, podemos discutir mais tarde.",
      },
      {
        type: "link",
        content: "carlossouza.com/analises",
      },
    ],
    publishedAt: "2024-10-24 09:30:00",
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/anaoliveira.png",
      name: "Ana Oliveira",
      role: "Especialista em Marketing",
    },
    content: [
      {
        type: "paragraph",
        content: "Bom dia, pessoal!",
      },
      {
        type: "paragraph",
        content:
          "Estou muito animada para anunciar nossa nova campanha de marketing. Todos estão convidados a participar.",
      },
      {
        type: "link",
        content: "anaoliveira.com/campanha",
      },
    ],
    publishedAt: "2024-10-25 17:20:45",
  },
  {
    id: 5,
    author: {
      avatarUrl: "https://github.com/lucaspereira.png",
      name: "Lucas Pereira",
      role: "Engenheiro de Software",
    },
    content: [
      {
        type: "paragraph",
        content: "E aí, galera!",
      },
      {
        type: "paragraph",
        content:
          "Acabei de concluir um novo módulo no meu curso de desenvolvimento de software. Quem tiver interesse, fiquem à vontade para dar uma olhada.",
      },
      {
        type: "link",
        content: "lucaspereira.dev/cursos",
      },
    ],
    publishedAt: "2024-10-26 12:05:22",
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {/* <Post author="Afonso Lima" content="Conteudo do author" /> */}

          {/* <Post author="André Silva" content="Conteudo do author" /> */}

          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
