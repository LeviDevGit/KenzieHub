"use client";

import Input from "@/components/Input";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { User, fetchApi } from "@/services/api";
import { useRouter } from "next/navigation";

interface IInputProps {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: User;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IInputProps>();
  const router = useRouter();

  const onSubmit = async (data: IInputProps) => {
    try {
      const response: IResponse = await fetchApi("sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.user.id);
      router.push("/");
    } catch (error) {}
  };

  const onSubmitDemo = async () => {
    try {
      const response: IResponse = await fetchApi("sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "demo@mail.com",
          password: "senha123demo",
        }),
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.user.id);
      router.push("/");
    } catch (error) {
      const response = await fetchApi("users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bio: "Demo",
          confirmPassword: "senha123demo",
          contact: "Contato Demo",
          course_module: "Primeiro módulo (Introdução ao Frontend)",
          email: "demo@mail.com",
          name: "Conta Demo",
          password: "senha123demo",
        }),
      });
    }
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
            <p>
              Ainda não possui uma conta?{" "}
              <Link href="/register">
                <button>Cadastre-se</button>
              </Link>
            </p>
          </footer>
          <div className={styles.interface_demo}>
            <button onClick={onSubmitDemo}>Demo Novo Usuário</button>
          </div>
        </div>
      </div>
    </main>
  );
}
