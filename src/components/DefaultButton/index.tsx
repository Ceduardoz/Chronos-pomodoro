import styles from "./styles.module.css";

type DefaultButtonProps = {
  children: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export default function DefaultButton({
  children,
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <button {...props} className={`${styles.button} ${styles[color]}`}>
      {children}
    </button>
  );
}
