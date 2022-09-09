import styles from './Search.module.css';
import plus from '../assets/plus.svg';

export function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button>Criar<img src={plus}></img></button>
    </div>
  )
}