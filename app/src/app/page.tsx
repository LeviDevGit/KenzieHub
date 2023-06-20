import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.header_navigator}>
          <div>
            <h1>Kenzie Hub</h1>
            <button>Sair</button>
          </div>
        </nav>
        <div className={styles.header_info}>
          <div>
            <h1>Olá, Samuel Leão</h1>
            <p>Primeiro módulo (Introdução ao Frontend)</p>
          </div>
        </div>
      </header>
      <div className={styles.body}>
        <div className={styles.body_summary}>
          <h2>Tecnologias</h2>
          <button>+</button>
        </div>
        <div className={styles.body_dashboard}>
          <button>
            <div>
              <h3>React JS</h3>
              <span>Intermediário</span>
            </div>
          </button>
          <button>
            <div>
              <h3>Next JS</h3>
              <span>Iniciante</span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
