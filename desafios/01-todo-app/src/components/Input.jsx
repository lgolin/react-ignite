import { useState } from 'react';
import { Item } from './Item';

export function Input() {
  const [items, setItems] = useState([1, 2]);
  // função para adicionar um novo item quando clicar enviar
  function handleCreateNewItem() {
    event.preventDefault();
    setItems([...items, items.length + 1]);
  }

  return (
    <>
      <form onSubmit={handleCreateNewItem}>
        <p>Adicionar um novo item</p>
        <input type="text" />
        <button type="submit">Enviar</button>
      </form>

      {/* Percorrendo o array de items e mostrando na tela */}
      {items.map((item) => {
        return <Item />;
      })}
    </>
  );
}
