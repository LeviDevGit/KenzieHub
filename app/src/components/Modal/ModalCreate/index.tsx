import { Dispatch, SetStateAction, useState } from "react";

import styles from "../styles.module.scss";
import { fetchApi } from "@/services/api";

interface IModalCreateProps {
  setCreate: Dispatch<SetStateAction<boolean>>;
}

export default function ModalCreate({ setCreate }: IModalCreateProps) {
  const [inputText, setInputText] = useState<string | undefined>();
  const [selectText, setSelectText] = useState<string>(
    "Primeiro módulo (Introdução ao Frontend)"
  );

  const handleSubmit = async (name: string | undefined, module: string) => {
    try {
      const content = {
        title: name,
        status: module,
      };
      const token = localStorage.getItem("token");
      const data = await fetchApi("users/techs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    console.log(name, module);
  };

  return (
    <dialog open className={styles.container}>
      <div className={styles.interface}>
        <div className={styles.interface_header}>
          <h1>Cadastrar Tecnologia</h1>
          <button
            onClick={() => {
              setCreate(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.interface_body}>
          <div>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              placeholder="Digite aqui o nome"
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Selecionar módulo</label>
            <select
              name=""
              id=""
              onChange={(e) => {
                setSelectText(e.target.value);
              }}
            >
              <option value="Primeiro módulo (Introdução ao Frontend)" selected>
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
          <button
            data-filled={inputText ? "true" : undefined}
            onClick={() => {
              handleSubmit(inputText, selectText);
            }}
          >
            Cadastrar Tecnologia
          </button>
        </div>
      </div>
    </dialog>
  );
}
