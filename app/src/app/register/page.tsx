import Link from "next/link";
import styles from "./styles.module.scss";
import Input from "@/components/Input";

export default function Register() {
  return (
    <main className={styles.container}>
      <div className={styles.interface}>
        <header className={styles.interface_header}>
          <h1>Kenzie Hub</h1>
          <Link href="/login">
            <button>Voltar</button>
          </Link>
        </header>
        <div className={styles.interface_body}>
          <div className={styles.interface_body_summary}>
            <h2>Crie sua conta</h2>
            <p>Rápido e grátis, vamos nessa</p>
          </div>
          <div className={styles.interface_body_form}>
            <form action="">
              <Input
                label="Nome"
                type="text"
                placeholder="Digite aqui seu nome"
              />
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
              <Input
                label="Confirmar Senha"
                type="password"
                placeholder="Digite novamente sua senha"
              />
              <Input label="Bio" type="text" placeholder="Fale sobre você" />
              <Input
                label="Contato"
                type="text"
                placeholder="Opção de contato"
              />
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
