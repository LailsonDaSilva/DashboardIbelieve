import styles from "./styles.module.scss";

export function Card() {
  return (
    <div className={styles.Cards_dashboard}>
      <div className={styles.card_dashboard}>
        <h3>
          <span>Clientes</span>
        </h3>
        <p className="incomeDisplay">40</p>
      </div>

      <div className={styles.card_dashboard}>
        <h3>
          <span>Estabelecimentos</span>
        </h3>
        <p className="expenseDisplay">100</p>
      </div>

      <div className={styles.card_dashboard}>
        <h3>
          <span>Categorias</span>
        </h3>
        <p className="totalDisplay">140</p>
      </div>
    </div>
  );
}
