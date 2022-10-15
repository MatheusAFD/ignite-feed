import { Header } from "./components/Header/Header";
import { Post, PostProps } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./assets/styles/global.css";
import styles from "./App.module.css";

interface Posts extends PostProps {
  id: number;
}

export function App() {
  const posts: Posts[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/matheusafd.png",
        name: "Matheus Araújo",
        role: "Front end Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋 " },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },

        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-10-03 20:00:00"),
    },

    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "CTO @Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋 " },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },

        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-10-03 20:00:00"),
    },
  ];

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
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
    </>
  );
}
