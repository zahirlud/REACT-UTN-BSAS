import styles from "./container.module.css";

const Container = ({ children }) => {
  return (
    <>
      <div className={styles.background_wrap}>{children}</div>
    </>
  );
};

export { Container };
