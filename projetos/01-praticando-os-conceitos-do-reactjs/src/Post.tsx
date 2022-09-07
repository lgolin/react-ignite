interface Author {
  author: string;
  content: string;
}

export function Post({ author, content }: Author) {
  return (
    <div>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  )
}