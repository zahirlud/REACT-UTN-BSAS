import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.head}>
      <nav className={styles.navbar}>
        <ul className={styles.ul_links}>
          <li className={styles.li_links}>
            <Link className={styles.link} to="/">
              INICIO
            </Link>
          </li>
          <li className={styles.li_links}>
            <Link className={styles.link} to="/servicios">
              SERVICIOS
            </Link>
          </li>
          <li className={styles.li_links}>
            <a className={styles.link} href="#footer">
              CONTACTO
            </a>
          </li>
          <li className={styles.li_links}>
            <Link className={styles.link} to="/galeria">
              GALERÍA/PROYECTOS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { NavBar };
