import {Header} from './components/Header.jsx';
import {Post} from './Post';
import './global.css';

export function App() {

  return (
    <div>
      <Header />
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
</div>
  )
}
