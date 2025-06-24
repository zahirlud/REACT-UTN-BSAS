import { NavBar } from "../Navbar";
import styles from "./galeria.module.css";
import imagen15 from "../../assets/casa15.jpg";
import imagen16 from "../../assets/casa16.jpg";
import imagen17 from "../../assets/casa17.jpg";
import imagen18 from "../../assets/casa18.jpg";
import imagen19 from "../../assets/casa19.jpg";

const Galeria = () => {
  return (
    <>
      <NavBar />
      <div className={styles.grid_reseñas}>
        <div className={styles.reseña}>
          <h1>Nuestros proyectos</h1>
        </div>
        <div className={styles.opinion1}>
          <a href="#herrera" style={{ color: "rgba(233, 187, 127, 0.753)" }}>
            Proyecto Herrera
          </a>
        </div>
        <div className={styles.opinion1}>
          <a href="#lagos" style={{ color: "rgba(233, 187, 127, 0.753)" }}>
            Proyecto Casa de Lago
          </a>
        </div>
        <div className={styles.opinion1}>
          <a href="#rios" style={{ color: "rgba(233, 187, 127, 0.753)" }}>
            Proyecto Rios Gutierrez
          </a>
        </div>
      </div>
      <div style={{ margin: "10rem 0 0 0", padding: "0 2rem" }}>
        <hr />

        <div className={styles.div_galeria2}>
          <div id="lagos" className={styles.div_proyectos}>
            <h2>Proyecto Casa de Lago</h2>
            <p>
              El Proyecto Casa de Lago se centra en la transformación de
              propiedades ubicadas en zonas lacustres o con vistas al agua.
              Ofrecemos renovaciones que maximizan las vistas panorámicas y
              mejoran el acceso al lago. Esto incluye ampliaciones de terrazas,
              instalación de ventanales de gran tamaño, y mejoras en la
              eficiencia energética para un entorno confortable y acogedor
              durante todo el año.
            </p>
          </div>
          <div className={styles.grid_galeria2}>
            <div className={styles.item15}>
              <img src={imagen15} alt="" />
            </div>
            <div className={styles.item16}>
              <img src={imagen16} alt="" />
            </div>
            <div className={styles.item17}>
              <img src={imagen17} alt="" />
            </div>
            <div className={styles.item18}>
              <img src={imagen18} alt="" />
            </div>
            <div className={styles.item19}>
              <img src={imagen19} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.div_galeria3} id="rios">
          <div id="lagos" className={styles.div_proyectos}>
            <h2>Proyecto Ríos Gutierrez</h2>
            <p>
              El Proyecto Ríos Gutiérrez se especializa en la renovación y
              modernización de casas familiares. Nos enfocamos en crear espacios
              amplios y luminosos, con un diseño contemporáneo que satisface las
              necesidades de familias modernas. Nuestros servicios incluyen
              renovaciones de cocina, baños, áreas de entretenimiento, y la
              implementación de soluciones de almacenamiento eficientes.
            </p>
          </div>
          <div className={styles.grid_galeria3}>
            <div className={styles.item15}>
              <img src={imagen15} alt="" />
            </div>
            <div className={styles.item16}>
              <img src={imagen16} alt="" />
            </div>
            <div className={styles.item17}>
              <img src={imagen17} alt="" />
            </div>
            <div className={styles.item18}>
              <img src={imagen18} alt="" />
            </div>
            <div className={styles.item19}>
              <img src={imagen19} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Galeria };
