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
          "Acabei de lançar um novo design para um site e adoraria saber o que acham!",
      },
      {
        type: "link",
        content: "joaosilva.design/portfolio",
      },
    ],
    publishedAt: "2024-10-22 20:15:13",
    comments: [
      {
        content: "O design está incrível, João! Parabéns!",
        publishedAt: "2024-10-22 20:30:00",
        author: {
          avatarUrl: "https://github.com/marciadias.png",
          name: "Márcia Dias",
        },
        likes: 0,
      },
      {
        content: "Adorei o visual limpo do site. Continue assim!",
        publishedAt: "2024-10-22 21:00:00",
        author: {
          avatarUrl: "https://github.com/pedroalves.png",
          name: "Pedro Alves",
        },
        likes: 0,
      },
      {
        content:
          "Você poderia compartilhar um pouco do seu processo de design?",
        publishedAt: "2024-10-22 22:15:30",
        author: {
          avatarUrl: "https://github.com/renatocastro.png",
          name: "Renato Castro",
          likes: 0,
        },
      },
    ],
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
    comments: [
      {
        content: "Ótimo progresso, Maria! Continue nos atualizando!",
        publishedAt: "2024-10-23 15:00:00",
        author: {
          avatarUrl: "https://github.com/joaobarbosa.png",
          name: "João Barbosa",
        },
        likes: 0,
      },
      {
        content: "É bom ver tudo se encaixando, parabéns!",
        publishedAt: "2024-10-23 16:00:00",
        author: {
          avatarUrl: "https://github.com/lucianacosta.png",
          name: "Luciana Costa",
        },
        likes: 0,
      },
      {
        content: "Estou ansioso para ver o produto final!",
        publishedAt: "2024-10-23 17:00:00",
        author: {
          avatarUrl: "https://github.com/marcosrodrigues.png",
          name: "Marcos Rodrigues",
        },
        likes: 0,
      },
    ],
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
    comments: [
      {
        content:
          "Resultados interessantes, Carlos! Pode compartilhar mais sobre a metodologia?",
        publishedAt: "2024-10-24 10:15:00",
        author: {
          avatarUrl: "https://github.com/paulapereira.png",
          name: "Paula Pereira",
          likes: 0,
        },
      },
      {
        content:
          "Os dados parecem promissores! Adoraria ouvir mais na próxima reunião.",
        publishedAt: "2024-10-24 11:00:00",
        author: {
          avatarUrl: "https://github.com/robertofaria.png",
          name: "Roberto Faria",
          likes: 0,
        },
      },
      {
        content:
          "Ótima análise, Carlos! Tenho algumas perguntas sobre as tendências que você mencionou.",
        publishedAt: "2024-10-24 12:30:00",
        author: {
          avatarUrl: "https://github.com/clarapereira.png",
          name: "Clara Pereira",
          likes: 0,
        },
      },
    ],
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
    comments: [
      {
        content: "Que campanha empolgante, Ana! Eu topo!",
        publishedAt: "2024-10-25 18:00:00",
        author: {
          avatarUrl: "https://github.com/renatalima.png",
          name: "Renata Lima",
        },
        likes: 0,
      },
      {
        content: "Adorei essa ideia, não vejo a hora de participar!",
        publishedAt: "2024-10-25 19:30:00",
        author: {
          avatarUrl: "https://github.com/juliocesar.png",
          name: "Julio Cesar",
        },
        likes: 0,
      },
      {
        content: "Isso é exatamente o que precisamos. Contem comigo!",
        publishedAt: "2024-10-25 20:00:00",
        author: {
          avatarUrl: "https://github.com/sandrapereira.png",
          name: "Sandra Pereira",
        },
        likes: 0,
      },
    ],
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
    comments: [
      {
        content:
          "Esse curso parece incrível, Lucas! Vou dar uma olhada com certeza.",
        publishedAt: "2024-10-26 12:30:00",
        author: {
          avatarUrl: "https://github.com/victorbrito.png",
          name: "Victor Brito",
          likes: 0,
        },
      },
      {
        content: "Estava procurando algo assim, valeu por compartilhar!",
        publishedAt: "2024-10-26 13:00:00",
        author: {
          avatarUrl: "https://github.com/larissalima.png",
          name: "Larissa Lima",
        },
        likes: 0,
      },
      {
        content: "Estou fazendo seu curso agora e está sendo fantástico!",
        publishedAt: "2024-10-26 13:30:00",
        author: {
          avatarUrl: "https://github.com/diogocosta.png",
          name: "Diogo Costa",
        },
        likes: 0,
      },
    ],
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
                comments={post.comments}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
