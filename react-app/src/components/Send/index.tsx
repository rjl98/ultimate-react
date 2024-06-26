import { ReactNode } from "react";
import styles from "./Send.module.css";

type Props = {
  children: ReactNode;
  status: boolean;
  onClick?: () => void;
};

function Send({ children, onClick, status }: Props) {
  return (
    <button disabled={status} onClick={onClick} className={styles.Send}>
      {children}
    </button>
  );
}

export default Send;
