import {Post} from './Post';

export function App() {

  return (
    <div>
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