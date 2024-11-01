import { NavBar } from "../Navbar";
import styles from "./servicios.module.css";
import imagen1 from "../../assets/working.jpg";
import imagen2 from "../../assets/working2.jpg";
const Servicios = () => {
  return (
    <>
      <NavBar />
      <div className={styles.wrap}>
        <div className={styles.services_grid}>
          <div style={{ backgroundColor: "rgba(233, 187, 127, 0.836)" }}>
            <h1>Nuestros Servicios</h1>
          </div>
          <div>
            <h2>Remodelación Completa</h2>
            <p>
              La remodelación completa implica una renovación integral de toda
              la vivienda o un área significativa de la misma. Este proceso
              abarca tanto el interior como el exterior del inmueble y puede
              incluir cambios en la estructura, distribución de espacios,
              sistemas eléctricos y de plomería, acabados, y más.
            </p>
          </div>
          <div>
            <h2>Remodelación de Cocinas</h2>
            <p>
              La remodelación de cocinas se centra en renovar y actualizar este
              espacio clave de la vivienda. Puede incluir la sustitución de
              gabinetes, encimeras, electrodomésticos, y sistemas de
              iluminación, así como mejoras en la distribución y eficiencia del
              espacio.
            </p>
          </div>
          <div>
            <img src={imagen1} alt="" />
          </div>
          <div>
            <img src={imagen2} alt="" />
          </div>
          <div>
            <h2>Interiores</h2>
            <p>
              La remodelación de interiores abarca la transformación de los
              espacios dentro de una vivienda. Esto puede incluir cambios en la
              distribución de las habitaciones, mejoras en el aislamiento
              térmico y acústico, la renovación de suelos, techos y paredes, así
              como la instalación de nuevos sistemas de iluminación y
              decoración.
            </p>
          </div>
          <div>
            <h2>Pisos</h2>
            <p>
              La renovación de pisos implica la instalación de nuevos materiales
              de suelo en una vivienda o edificio. Esto puede incluir una
              variedad de materiales como madera, cerámica, vinilo, piedra,
              alfombras, entre otros. La elección del tipo de piso depende del
              uso del espacio, el presupuesto, y las preferencias estéticas del
              cliente.
            </p>
          </div>
          <div>
            <h2>Remodelación de Baños</h2>
            <p>
              La remodelación de baños se enfoca en la renovación de los
              elementos y sistemas dentro de un baño. Esto puede incluir la
              instalación de nuevos accesorios como inodoros, lavabos, duchas o
              bañeras, así como la renovación de revestimientos, suelos, y
              sistemas de plomería.
            </p>
          </div>
          <div>
            <h1>Expertos en:</h1>
          </div>
          <div>
            <h2>Preconstrucción</h2>
            <ul>
              <li>Diseño-Construcción</li>

              <li>Programación</li>
              <li>Presupuestos</li>
            </ul>
          </div>
          <div>
            <h2>Construcción</h2>
            <ul>
              <li>Control de Calidad</li>

              <li>Gestión de Seguridad</li>
              <li>Gestión de Subcontratistas</li>
            </ul>
          </div>
          <div>
            <h2>Posconstrucción</h2>
            <ul>
              <li>Certificado de Ocupación</li>

              <li>Planos de obra final</li>
              <li>Planos de obra final</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { Servicios };
