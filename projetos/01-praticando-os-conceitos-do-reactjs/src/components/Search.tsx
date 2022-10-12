import React from 'react';
import styles from './Search.module.css';
import plus from '../assets/plus.svg';

export function Search() {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  return (
    <div className={styles.search}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button type="submit">Criar<img src={plus}></img></button>
    </div>
  )
}