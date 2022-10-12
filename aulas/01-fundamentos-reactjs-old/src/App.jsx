import {Header} from './components/Header.jsx';
import {Post} from './components/Post';
import {Sidebar} from "./components/Sidebar.jsx";

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lgolin.png",
      name: "Lais Golin",
      role: "Software Engineer"
    },
 
  content: [
  {type: 'paragraph', content:'Fala galeraa 👋'},
  {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW return, evento da Rocketseat. O nome do projeto é DoctorCare'},
  {type: 'link', content:'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/ogoopa.png",
      name: "Gustavo Parizi",
      role: "Fullstack Developer"
    },
 
  content: [
  {type: 'paragraph', content:'Fala galeraa 👋'},
  {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW return, evento da Rocketseat. O nome do projeto é DoctorCare'},
  {type: 'link', content:'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-05-10 20:00:00')
  },
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
           return (
           <Post
           key={post.id}
           author={post.author}
           content={post.content}
           publishedAt={post.publishedAt}
           />
           )
          })}
        </main>
      </div>
</div>
  )
}
