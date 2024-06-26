import { ReactNode } from "react";
import styles from "./Alert.module.css";

type Props = {
  children: ReactNode;
  color: boolean;
  onClick?: () => void;
};

function Alert({ children, color, onClick }: Props) {
  const className = [styles.Alert, color ? styles.blueBG : styles.redBG].join(
    " "
  );
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
}

export default Alert;
