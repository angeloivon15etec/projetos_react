import styles from './Cartao.module.css';

function Cartao(props) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.foto} alt={props.nome} />
      <h2 className={styles.nome}>Nome: {props.nome}</h2>
      <h3 className={styles.profi}>Profissão: {props.profi}</h3>
      <p className={styles.descricao}>Descrição: {props.descricao}</p>
    </div>
  );
}

export default Cartao;
