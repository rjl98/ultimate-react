// import { ReactNode, useState } from "react";

// type Props = {
//   children: ReactNode;
// };

// function Button({ children }: Props) {
//   const [click, setClick] = useState(0);
//   const handleClick = () => {
//     setClick(1);
//     setTimeout(() => setClick(0), 5000);
//   };
//   return (
//     <button
//       type="button"
//       onClick={handleClick}
//       className={`btn btn-primary ${click ? "btn-secondary disabled" : ""}`}
//     >
//       {click ? "Cargando..." : children}
//     </button>
//   );
// }

// export default Button;

import { ReactNode } from "react";
// import styles from "./Button.module.css";
import { FaRegThumbsUp } from "react-icons/fa";
import styled from "styled-components";
type BtnProps = {
  click?: boolean;
};

// Styled components
const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.click ? "gray" : "red")};
  padding: 25px 30px;
`;

type Props = {
  children: ReactNode;
  click?: boolean;
  onClick?: () => void;
};

function Button({ children, click, onClick }: Props) {
  // const className = [
  //   `btn btn-${click ? "secondary disabled" : "primary"}`,
  //   styles.button, styles.padded,
  // ].join(" ");
  return (
    <Btn
      type="button"
      onClick={onClick}
      disabled={click}
      click={click}
      // className={className}
    >
      {click ? "Cargando..." : children}
      <FaRegThumbsUp color="blue" size={40} />
    </Btn>
  );
}

export default Button;
