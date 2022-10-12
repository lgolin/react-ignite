import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="John Smith"
        content="lorem ipsum dolor sit amet, consectetur adipiscing else."
      />
      <Post author="Gabriel Smith" content="Um novo post muito legal." />
    </div>
  );
}
