"use client";

import Input from "@/components/Input";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { fetchApi } from "@/services/api";

interface IInputProps {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IInputProps>();
  const onSubmit = async (data: IInputProps) => {
    try {
      const response = await fetchApi("sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };
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
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      label="Email"
                      type="email"
                      placeholder="Digite aqui seu email"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      label="Senha"
                      type="password"
                      placeholder="Digite aqui sua senha"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
              />
              <button type="submit">Entrar</button>
            </form>
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
