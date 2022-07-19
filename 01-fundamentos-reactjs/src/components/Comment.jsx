import {ThumbsUp, Trash} from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lgolin.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lais Golin</strong>
              <time title="17 de Julho às 9:44h" dateTime="2022-15-07 09:44:00">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
      

      <footer>
        <button>
          <ThumbsUp/>
          Aplaudir <span>20</span>
        </button>
      </footer>
      </div>
    </div>
  )
}