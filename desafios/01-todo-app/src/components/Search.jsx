import { useState } from 'react';
import { TaskList } from './TaskList';

import React from 'react';
import styles from './Search.module.css';
import plus from '../assets/plus.svg';
import { Task } from './Task';

export function Search() {
  const [items, setItems] = useState(['Eu sou um item']);

  // função para adicionar um novo item quando clicar enviar
  function handleCreateNewItem() {
    event.preventDefault();

    const newItemText = event.target.item.value;

    setItems([...items, newItemText]);
    newItemText = '';
  }

  return (
    <>
      <form onSubmit={handleCreateNewItem} className={styles.search}>
        <input name="item" type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar<img src={plus}></img>
        </button>
      </form>

      {/* Percorrendo o array de items e mostrando na tela */}

      {items.map((item) => {
        return (
          <>
            <TaskList content={item} />
          </>
        );
      })}
    </>
  );
}
