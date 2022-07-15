import {Header} from './components/Header.jsx';
import {Post} from './components/Post';
import {Sidebar} from "./components/Sidebar.jsx";

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lais Golin"
            content="lorem ipsum dolor sit amet, consectetur adip"
          />
          <Post
            author="Sina Stiller"
            content="Teste numero 2"
          />

          <Post
            author="Thais Golin"
            content="Teste numero 3"
          />
        </main>

      </div>
</div>
  )
}
