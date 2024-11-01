import styles from "./footer.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    comentario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      direccion: "",
      comentario: "",
    });
  };

  return (
    <>
      <footer className={styles.footerinfo} id="footer">
        <div className={styles.div_contacto}>
          <div style={{ width: "100%" }}>
            <h2 className={styles.h2_contacto}>Contáctanos</h2>
          </div>
          <div>
            <FontAwesomeIcon icon={faHouse} />
            <p>
              Av. Fray Antonio Alcalde 10 44100 , Resistencia, Chaco. Argentina
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@remodelaciones.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMobileScreen} />
            <p>+52-33-12345678</p>
          </div>
          <p style={{ fontSize: "13px" }}>
            © 2024 Creado por Remodelación Residencial LUD
          </p>
        </div>

        <div className={styles.div_formulario}>
          <h2>Formulario</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="input_nombre"
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <input
              className="input_apellido"
              type="text"
              name="apellido"
              id="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
            <input
              className="input_email"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="input_telefono"
              type="number"
              name="telefono"
              id="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <input
              className="input_direccion"
              type="text"
              name="direccion"
              id="direccion"
              placeholder="Dirección"
              value={formData.direccion}
              onChange={handleChange}
            />
            <input
              type="text"
              name="comentario"
              id="comentario"
              placeholder="Comentario"
              className="input_comentario"
              value={formData.comentario}
              onChange={handleChange}
            />
            <button type="submit">ENVIAR</button>
            <button type="reset" onClick={handleReset}>
              BORRAR
            </button>
          </form>
        </div>

        <div className={styles.div_redes}>
          <h2>Redes Sociales</h2>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
