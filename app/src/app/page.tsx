"use client";

import { useEffect, useState } from "react";
import { User, fetchApi } from "@/services/api";
import styles from "./styles.module.scss";
import ModalCreate from "@/components/Modal/ModalCreate";
import ModalEdit from "@/components/Modal/ModalEdit";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [create, setCreate] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [editInfo, setEditInfo] = useState({ name: "", module: "", id: "" });
  const [content, setContent] = useState<User | undefined>();

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          router.push("/login");
        }
        const data = await fetchApi<User>(`users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        setContent(data);
      } catch (error) {
        router.push("/login");
      }
    };
    handleSubmit();
  });

  return (
    <main className={styles.container}>
      {create ? <ModalCreate setCreate={setCreate} /> : null}
      {edit ? <ModalEdit setEdit={setEdit} initialInfo={editInfo} /> : null}
      <header className={styles.header}>
        <nav className={styles.header_navigator}>
          <div>
            <h1>Kenzie Hub</h1>
            <button
              onClick={() => {
                localStorage.clear();
                router.push("/login");
              }}
            >
              Sair
            </button>
          </div>
        </nav>
        <div className={styles.header_info}>
          <div>
            <h1>{content?.name}</h1>
            <p>{content?.course_module}</p>
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
            ? content.techs.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => {
                    setEditInfo({
                      name: tech.title,
                      module: tech.status,
                      id: tech.id,
                    });
                    setEdit(true);
                  }}
                >
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
