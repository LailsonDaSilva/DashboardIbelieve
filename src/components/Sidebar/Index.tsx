import styles from "./styles.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidenav}>
      <div className={styles.nav_logo}>
        <a >
          <img src="./assets/logo.png" alt="" />
        </a>
      </div>

      <ul className={styles.mcd_menu}>
        <li className={styles.active}>
          <a >
            <i className="bx bx-grid-alt "></i>
            <strong>Dashboard</strong>
            <small></small>
          </a>
        </li>
        <li>
          <a >
            <i className="bx bx-grid-alt "></i>
            <strong>Clientes</strong>
            <small></small>
          </a>
        </li>
        <li>
          <a >
            <i className="bx bx-grid-alt "></i>
            <strong>Estabelecimentos</strong>
            <small></small>
          </a>
        </li>
        <li>
          <a>
            <i className="bx bx-grid-alt "></i>
            <strong>Categorias</strong>
            <small></small>
          </a>
        </li>
        <li>
          <a >
            <i className="bx bx-grid-alt "></i>
            <strong>Perfil</strong>
            <small></small>
          </a>
        </li>
      </ul>
      <div className={styles.exist}>
        <a href="/" className={styles.nav_link}>
          <i className="bx bx-log-out nav__icon"></i>
          <span className={styles.nav_name}>Sair</span>
        </a>
      </div>
    </aside>
  );
}
