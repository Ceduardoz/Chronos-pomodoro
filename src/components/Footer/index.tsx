import type React from "react";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda como funciona a tecnica pomodoro</a>
      <a href='#'>Chronos Pomorodo &copy;{new Date().getFullYear()}</a>
    </footer>
  );
}
