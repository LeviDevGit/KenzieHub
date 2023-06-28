import Input from "@/components/Input";
import styles from "../styles.module.scss";
import { Dispatch, SetStateAction } from "react";

interface IModalCreateProps {
  setCreate: Dispatch<SetStateAction<boolean>>;
}

export default function ModalCreate({ setCreate }: IModalCreateProps) {
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
          <Input label="Nome" placeholder="Digite aqui o nome" type="text" />
          <div>
            <label htmlFor="">Selecionar módulo</label>
            <select name="" id="">
              <option value="">Primeiro módulo</option>
              <option value="">Segundo módulo</option>
              <option value="">Terceiro módulo</option>
              <option value="">Quarto módulo</option>
            </select>
          </div>
          <button>Cadastrar Tecnologia</button>
        </div>
      </div>
    </dialog>
  );
}
