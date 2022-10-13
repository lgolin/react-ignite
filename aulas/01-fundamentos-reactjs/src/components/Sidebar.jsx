import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1665583243409-671149263433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
          className={styles.cover}
        />
        <div className={styles.profile}>
          <img className={styles.avatar} src="https://github.com/lgolin.png" />
          <strong>Lais Golin</strong>
          <span>Web Developer</span>
        </div>
        <footer>
          <a href="#">
            <PencilLine size={20} /> Editar seu perfil
          </a>
        </footer>
      </aside>
    </div>
  );
}
