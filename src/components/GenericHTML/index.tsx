import type React from "react";
import styles from "./styles.module.css";

type GenericHtmlProps = {
  children: React.ReactNode;
};

export default function GenericHTML({ children }: GenericHtmlProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
