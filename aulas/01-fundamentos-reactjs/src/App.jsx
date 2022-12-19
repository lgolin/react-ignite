import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Lais Golin"
        content="Esse vai ser um texto que não vai ter significado nenhum."
      />

      <Post
        author="T Golin"
        content="Esse vai ser um texto que não vai ter significado nenhum."
      />
    </div>
  );
}
