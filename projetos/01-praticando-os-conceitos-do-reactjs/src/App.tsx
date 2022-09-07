import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post author="Diego Fernandes" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. " />

      <Post author="Lais Golin" content="Eaque numquam ullam a nulla totam labore officia" />
    </div>
  )
}