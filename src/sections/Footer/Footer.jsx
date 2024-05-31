import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <div>
        <p>
          Faça enquanto aprende e aprenda enquanto faz!
        </p>
      </div>
      <p>
        &copy; 2024 Bruno Almeida. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
