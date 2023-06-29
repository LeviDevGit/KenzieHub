import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { fetchApi } from "@/services/api";
import styles from "../styles.module.scss";

interface IModalEditProps {
  setEdit: Dispatch<SetStateAction<boolean>>;
  initialInfo: {
    name: string;
    module: string;
    id: string;
  };
}

interface ApiResponse<T> {
  status: number;
  data: T;
}

interface ErrorData {
  message: string;
}

export default function ModalEdit({ setEdit, initialInfo }: IModalEditProps) {
  const [selectText, setSelectText] = useState<string>(initialInfo.module);

  const handleSubmit = async (module: string) => {
    try {
      const content = {
        status: module,
      };
      const token = localStorage.getItem("token");
      const data = await fetchApi(`users/techs/${initialInfo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      });
      toast.success("Tecnologia editada com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await fetchApi(`users/techs/${initialInfo.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      toast.success("Tecnologia deletada com sucesso!");
    }
  };

  return (
    <dialog open className={styles.container}>
      <div className={styles.interface}>
        <div className={styles.interface_header}>
          <h1>Tecnologia Detalhes</h1>
          <button
            onClick={() => {
              setEdit(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.interface_body}>
          <div>
            <label htmlFor="">Nome</label>
            <input type="text" placeholder={initialInfo.name} disabled />
          </div>
          <div>
            <label htmlFor="">Status</label>
            <select
              name=""
              id=""
              onChange={(e) => {
                setSelectText(e.target.value);
              }}
            >
              <option disabled selected hidden>
                {initialInfo.module}
              </option>
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
          <div className={styles.interface_footer}>
            <button
              className={styles.interface_footer_saveButton}
              onClick={() => {
                handleSubmit(selectText);
                setEdit(false);
              }}
            >
              Salvar alterações
            </button>
            <button
              className={styles.interface_footer_deleteButton}
              onClick={() => {
                handleDelete();
                setEdit(false);
              }}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
