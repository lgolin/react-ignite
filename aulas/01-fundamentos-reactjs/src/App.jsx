import { Post } from './Post';

export function App() {
  return (
    <>
      <Post
        author="Lais Golin"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Post
        author="Sina Stiller"
        content="Hi there, my name is Sina and I am new here"
      />
      <Post />
      <Post />
    </>
  );
}
