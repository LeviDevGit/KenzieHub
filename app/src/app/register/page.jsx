import styles from "./styles.module.scss";

export default function Register() {
  return (
    <main className={styles.container}>
      <div className={styles.interface}>
        <header className={styles.interface_header}>
          <h1>Kenzie Hub</h1>
          <button>Voltar</button>
        </header>
        <div className={styles.interface_body}>
          <div className={styles.interface_body_summary}>
            <h2>Crie sua conta</h2>
            <p>Rápido e grátis, vamos nessa</p>
          </div>
          <div className={styles.interface_body_form}>
            <form action="">
              <div>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder="Digite aqui seu email" />
              </div>
              <div>
                <label htmlFor="">Selecionar módulo</label>
                <select name="" id="">
                  <option value="">Primeiro módulo</option>
                  <option value="">Segundo módulo</option>
                  <option value="">Terceiro módulo</option>
                  <option value="">Quarto módulo</option>
                </select>
              </div>
              <button>Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
