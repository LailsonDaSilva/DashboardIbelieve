import React from "react";

import { useHistory } from "react-router-dom";
import styles from "./styles.module.scss";

export function Signin() {
  const history = useHistory();

  function navigateToDashboard() {
    history.push("/dashboard");
  }

  return (
    <main className={styles.Page_Singnin}>
      <div className={styles.Singnin_Content}>
        <div className={styles.card}>
          <div className={styles.card_body}>
            <div>
              <img
                className={styles.auth_icon}
                src="./assets/logo_small.png"
                alt="Logo Van"
              />
            </div>
            <h3>Dashboard I Believe</h3>
            <div className={styles.input_group}>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="email">Senha</label>
              <input type="password" placeholder="Senha" />
            </div>

            <button
              onClick={navigateToDashboard}
              className={styles.Btn_Singnin}
            >
              Acessar sua conta
            </button>
            <p className={styles.text_muted}>
              Esqueceu seu senha? <a href="/ResetPassword">Resetar</a>
            </p>
            <p className={styles.text_muted}>
              Não tem uma conta? <a href="/Signup">Inscrever-se</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
