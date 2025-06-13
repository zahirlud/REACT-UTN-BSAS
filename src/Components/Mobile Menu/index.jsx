import React, { useState } from "react";
import styles from "./mobile.module.css";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <nav
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>Mi Sitio</div>
        <div
          className={`${styles.menuButton} ${open ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {open && (
        <div className={styles.fullscreenMenu}>
          <a href="#home" className={styles.link} onClick={closeMenu}>
            Home
          </a>
          <a href="#galeria" className={styles.link} onClick={closeMenu}>
            Galería
          </a>
          <a href="#contacto" className={styles.link} onClick={closeMenu}>
            Contacto
          </a>
        </div>
      )}
    </header>
  );
};

export default MobileMenu;
