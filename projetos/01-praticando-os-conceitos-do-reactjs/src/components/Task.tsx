import styles from './Task.module.css'
import clipboard from '../assets/clipboard.svg';
import { TaskList } from './TaskList';
import { useState } from 'react';

export function Task() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.firstLine}>
          <p className={styles.tasks}>Tarefas criadas<span>0</span></p>
          <p className={styles.done}>Concluídas<span>0</span></p>
        </div>
        <hr />

        {/* Task List */}

        {/* <div className={styles.containerTasks}>
          <img src={clipboard} alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div> */}
      </div>
    </div>
  )
}