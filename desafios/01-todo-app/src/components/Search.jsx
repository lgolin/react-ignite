import { useState } from 'react';
import { TaskList } from './TaskList';

import React from 'react';
import styles from './Search.module.css';
import plus from '../assets/plus.svg';
import { Task } from './Task';

export function Search() {
  const [tasks, setTasks] = useState(['Eu sou um item']);
  const [newItemTask, setNewItemTask] = useState('');

  // função para adicionar um novo item quando clicar enviar
  function handleCreateNewItem() {
    event.preventDefault();

    setTasks([...tasks, newItemTask]);
    setNewItemTask('');
  }

  function handleNewItemChange() {
    setNewItemTask(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleCreateNewItem} className={styles.search}>
        <input
          name="item"
          placeholder="Adicione uma nova tarefa"
          value={newItemTask}
          onChange={handleNewItemChange}
        />
        <button type="submit">
          Criar<img src={plus}></img>
        </button>
      </form>

      <Task />
      {/* Percorrendo o array de items e mostrando na tela */}
      {tasks.map((item) => {
        return (
          <>
            <TaskList content={item} />
          </>
        );
      })}
    </>
  );
}
