"use client";

import { useEffect, useState } from "react";

import { Root, fetchApi } from "@/services/api";

import styles from "./styles.module.scss";
import ModalCreate from "@/components/Modal/ModalCreate";

export default function Home() {
  const [create, setCreate] = useState<boolean>(false);
  const [content, setContent] = useState<Root | undefined>();

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const autoLogin = {
          email: "gabriel@kenzie.com.br",
          password: "123456",
        };

        const data = await fetchApi<Root>("sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(autoLogin),
        });
        localStorage.setItem("token", data.token);
        setContent(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleSubmit();
  });

  return (
    <main className={styles.container}>
      {create ? <ModalCreate setCreate={setCreate} /> : null}
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
          <button
            type="button"
            onClick={() => {
              setCreate(true);
            }}
          >
            +
          </button>
        </div>
        <div className={styles.body_dashboard}>
          {content
            ? content.user.techs.map((tech) => (
                <button key={tech.id}>
                  <div>
                    <h3>{tech.title}</h3>
                    <span>{tech.status}</span>
                  </div>
                </button>
              ))
            : null}
        </div>
      </div>
    </main>
  );
}
