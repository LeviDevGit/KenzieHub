import { HTMLInputTypeAttribute } from "react";

import styles from "./styles.module.scss";

interface IInputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string | undefined;
}

export default function Input({ label, type, placeholder }: IInputProps) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} autoComplete="off" />
    </div>
  );
}
