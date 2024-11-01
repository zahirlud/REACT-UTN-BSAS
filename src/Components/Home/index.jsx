import styles from "./home.module.css";
import { NavBar } from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPuzzlePiece,
  faVectorSquare,
  faPersonDigging,
} from "@fortawesome/free-solid-svg-icons";

import imagen1 from "../../assets/en-donde-trabaja-un-arquitecto-1-compressor-Dec-17-2022-08-16-39-6601-PM.jpeg";
import imagen2 from "../../assets/remodelacion-arquitectura.jpg";
import imagen3 from "../../assets/casa8.jpg";
import imagen4 from "../../assets/9ac628b830dc502e91277d91a4abf0a6.jpg";
import imagen5 from "../../assets/casa3.jpg";
import imagen6 from "../../assets/casa5.webp";
import imagen7 from "../../assets/casa7.jpg";
import imagen8 from "../../assets/casa10.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.background_container}>
        <div className={styles.background_overlay}>
          <NavBar />

          <div className={styles.content}>
            <div>
              <p>Remodelación Residencial LUD</p>
              <p>Recreando casas de ensueños</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.background_wrap}>
        <div className={styles.grid_container}>
          <div className={styles.item_1}>
            <img src={imagen1} alt="" />
          </div>

          <div className={styles.item_2}>
            <div>
              <h1>Servicios</h1>
              <ul style={{ padding: "0" }}>
                <li>Remodelación Completa</li>
                <li>Remodelación de Cocinas</li>
                <li>Remodelación de Baños</li>
                <li>Interiores</li>
                <li>Pisos</li>
              </ul>
              <button className={styles.button_item2}>
                <a href="">MÁS INFORMACIÓN</a>
              </button>
            </div>
          </div>

          <div className={styles.item_3}>
            <FontAwesomeIcon icon={faHouse} style={{ fontSize: "4rem" }} />

            <p>Amplia Experiencia</p>
          </div>
          <div className={styles.item_4}>
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              style={{ fontSize: "4rem" }}
            />

            <p>Equipo Profesional</p>
          </div>
          <div className={styles.item_5}>
            <FontAwesomeIcon
              icon={faVectorSquare}
              style={{ fontSize: "4rem" }}
            />

            <p>Acabados Finos</p>
          </div>
          <div className={styles.item_6}>
            <FontAwesomeIcon
              icon={faPersonDigging}
              style={{ fontSize: "4rem" }}
            />

            <p>Sustentabilidad y Responsabilidad</p>
          </div>
          <div className={styles.item_7}>
            <h1>Nosotros</h1>
            <h2 style={{ color: "rgba(233, 187, 127, 0.753)" }}>
              Remodelación Residencial LUD
            </h2>
            <p>
              En Remodelación Residencial LUD, nos dedicamos a transformar
              viviendas en hogares de ensueño. Con años de experiencia en el
              sector, nuestro equipo de profesionales ofrece servicios de
              remodelación integral, incluyendo cocinas, baños, interiores y
              más. Nuestra misión es convertir tus ideas en realidad, combinando
              calidad y diseño para crear espacios funcionales y estéticamente
              agradables.
            </p>
          </div>
          <div className={styles.item_8}>
            <img src={imagen2} alt="" />
          </div>
        </div>
        <div style={{ marginTop: "10rem" }}>
          <h1 className={styles.tit_proyecto}>Proyectos recientes</h1>
          <div className={styles.grid_galeria}>
            <div className={styles.item_9}>
              <img src={imagen3} alt="" />
            </div>
            <div className={styles.item_10}>
              <img src={imagen4} alt="" />
            </div>
            <div className={styles.item_11}>
              <img src={imagen5} alt="" />
            </div>
            <div className={styles.item_12}>
              <img src={imagen6} alt="" />
            </div>
            <div className={styles.item_13}>
              <img src={imagen7} alt="" />
            </div>
            <div className={styles.item_14}>
              <img src={imagen8} alt="" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "10rem" }}>
          <div className={styles.grid_reseñas}>
            <div className={styles.reseña}>
              <h1>Reseñas</h1>
            </div>
            <div className={styles.opinion1}>
              <p>
                "¡Increíble experiencia! Contraté a Remodelación Residencial LUD
                para transformar mi cocina y sala de estar, y el resultado
                superó todas mis expectativas. Ahora tengo una cocina moderna y
                un espacio de estar elegante y acogedor. Sin duda, los
                recomendaré a todos mis amigos y familiares. "
              </p>
              <h2 style={{ color: "rgba(233, 187, 127, 0.753)" }}>Javier S.</h2>
            </div>
            <div className={styles.opinion1}>
              <p>
                "Remodelación Residencial LUD hizo un trabajo fantástico en mi
                baño principal. La calidad de los acabados es impresionante, y
                el diseño que propusieron aprovechó cada centímetro de espacio.
                ¡Mi baño parece sacado de una revista de diseño! No puedo estar
                más feliz con el resultado."
              </p>
              <h2 style={{ color: "rgba(233, 187, 127, 0.753)" }}>María G.</h2>
            </div>
            <div className={styles.opinion1}>
              <p>
                "¡No podríamos estar más contentos con la renovación de nuestra
                casa! Remodelación Residencial LUD fue increíble desde el primer
                día. Nos ayudaron a elegir los materiales perfectos y estuvieron
                atentos a nuestras ideas y necesidades. ¡Gracias por su
                excelente trabajo!"
              </p>
              <h2 style={{ color: "rgba(233, 187, 127, 0.753)" }}>
                Ana y Carlos M.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
