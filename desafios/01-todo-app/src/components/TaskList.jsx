import { Trash } from 'phosphor-react';
import styles from './TaskList.module.css';

export function TaskList({ content }) {
  return (
    <section className={styles.container}>
      <div className={styles.taskListBox}>
        <div className={styles.box}>
          <p>
            <input type="checkbox" id="vehicle1" name="vehicle1" />
            {content}
          </p>
        </div>
        <button title="Deletar Task">
          <Trash size={24} />
        </button>
      </div>
    </section>
  );
}
