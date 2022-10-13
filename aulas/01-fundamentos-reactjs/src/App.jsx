import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';
import Sidebar from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lais Golin"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Sina Stiller"
            content="Hi there, my name is Sina and I am new here"
          />
        </main>
      </div>
    </>
  );
}
