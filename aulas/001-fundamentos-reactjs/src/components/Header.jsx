import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo';

export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
}
