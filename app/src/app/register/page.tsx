"use client";

import Link from "next/link";
import Input from "@/components/Input";
import styles from "./styles.module.scss";
import { useForm, Controller } from "react-hook-form";
import { fetchApi } from "@/services/api";

interface IInputProps {
  bio: string;
  confirmPassword?: string;
  contact: string;
  course_module: string;
  email: string;
  name: string;
  password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IInputProps>();
  const onSubmit = async (data: IInputProps) => {
    delete data.confirmPassword;

    try {
      const response = await fetchApi("users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {}
  };

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
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      label="Nome"
                      type="text"
                      placeholder="Digite aqui seu nome"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
              />
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
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      label="Confirmar Senha"
                      type="password"
                      placeholder="Digite novamente sua senha"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
              />
              <Controller
                name="bio"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      label="Bio"
                      type="text"
                      placeholder="Fale sobre você"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
              />
              <Controller
                name="contact"
                control={control}
                render={({ field }) => {
                  return (
                    <Input
                      label="Contato"
                      type="text"
                      placeholder="Opção de contato"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
              />
              <div>
                <label htmlFor="">Selecionar módulo</label>
                <select id="" {...register("course_module")}>
                  <option value="Primeiro módulo (Introdução ao Frontend)">
                    Primeiro módulo
                  </option>
                  <option value="Segundo módulo (Frontend Avançado)">
                    Segundo módulo
                  </option>
                  <option value="Terceiro módulo (Introdução ao Backend)">
                    Terceiro módulo
                  </option>
                  <option value="Quarto módulo (Backend Avançado)">
                    Quarto módulo
                  </option>
                </select>
              </div>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
