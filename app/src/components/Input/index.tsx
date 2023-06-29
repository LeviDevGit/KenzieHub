import { HTMLInputTypeAttribute } from "react";

import styles from "./styles.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string | undefined;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type,
  placeholder,
  onChange,
  value,
}: IInputProps) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
