import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_components/main.module.css";

interface IProps {
  children: ReactNode;
  modal: ReactNode;
}

const Layout = ({ children, modal }: IProps) => {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
};

export default Layout;
