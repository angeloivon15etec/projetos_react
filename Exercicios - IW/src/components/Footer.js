import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Desenvolvido por <strong className={styles.highlight}>Angelo Ivon © 2025</strong></p>
    </footer>
  );
}

export default Footer;
