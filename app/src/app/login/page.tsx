import Input from "@/components/Input";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Login() {
  return (
    <main className={styles.container}>
      <div className={styles.interface}>
        <header className={styles.interface_header}>
          <h1>Kenzie Hub</h1>
        </header>
        <div className={styles.interface_body}>
          <div className={styles.interface_body_summary}>
            <h2>Login</h2>
          </div>
          <div className={styles.interface_body_form}>
            <form action="">
              <Input
                label="Email"
                type="email"
                placeholder="Digite aqui seu email"
              />
              <Input
                label="Senha"
                type="password"
                placeholder="Digite aqui sua senha"
              />
            </form>
            <button>Entrar</button>
          </div>
          <footer className={styles.interface_footer}>
            <p>Ainda não possui uma conta?</p>
            <Link href="/register">
              <button>Cadastre-se</button>
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}
