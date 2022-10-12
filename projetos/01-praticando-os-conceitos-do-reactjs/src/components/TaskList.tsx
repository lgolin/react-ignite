import { Trash } from "phosphor-react";
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <section>
      <div className={styles.taskListBox}>
        <div className={styles.box}>

        </div>
        <button title="Deletar Task">
          <Trash size={24} />
        </button>
      </div>
    </section>
  )
}