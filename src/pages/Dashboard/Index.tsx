import React from "react";

import { useHistory } from "react-router-dom";
import { Card } from "../../components/Cards/Index";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar/Index";
import styles from "./styles.module.scss";

export function Dashboard() {
  const history = useHistory();

  function navigateToDashboard() {
    history.push("/dashboard");
  }

  return (
    <div className={styles.grid_container}>
      <Header />

      <Sidebar />
      <main className={styles.Page_Dashboard}>
        <section className={styles.cards}>
          <Card />
        </section>
        <section className={styles.form_Content}>
          <div className={styles.card}>
            {" "}
            {/* Class Card in Global.scss */}
            <div className={styles.card_body}>
              <div>
                <img
                  className={styles.auth_icon}
                  src="./assets/logo_small.png"
                  alt="Logo Van"
                />
              </div>
              <h3>Novo estabelecimento</h3>
              <div className={styles.form_Row}>
                <div className={styles.input_group}>
                  <label htmlFor="Nome">Nome</label>
                  <input type="text" placeholder="Nome" />
                </div>
                <div className={styles.input_group}>
                  <label>Categoria</label>
                  <input type="text" placeholder="Categoria" />
                </div>
                <div className={styles.input_group}>
                  <label>Desconto</label>
                  <input type="text" placeholder="Desconto" />
                </div>
              </div>
              <div className={styles.input_group}>
                <label htmlFor="email">Endereço</label>
                <input type="text" placeholder="Endereço" />
              </div>

              <button onClick={navigateToDashboard} className={styles.Btn_Form}>
                Criar
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
