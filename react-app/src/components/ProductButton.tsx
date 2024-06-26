import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

function ProductButton({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}

export default ProductButton;
