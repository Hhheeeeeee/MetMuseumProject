import React, { useEffect, useState, useRef } from "react";
import "../../styles/noticias_museos.css";
import noticiaImagen from "../../assets/img/noticiaPorDefecto.jpg";
import { useTranslation } from "react-i18next";

const NoticiasMuseos = () => {
  const { t, i18n } = useTranslation();
  const [noticias, setNoticias] = useState([]);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const langMap = {
      es: "es",
      en: "en",
      it: "it",
      fr: "fr",
    };

    const idiomaActual = i18n.language;
    const apiLang = langMap[idiomaActual] || "es";

    fetch(`/api/noticias?lang=${apiLang}`)
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((err) => {
        console.error("Error al cargar noticias:", err);
        setNoticias([]); // vaciar en caso de error
      });
  }, [i18n.language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="destacados-container">
      <h2>{t("destacado").toUpperCase()}</h2>
      <div className="grid-container" ref={containerRef}>
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className={`card ${index === 0 ? "grande" : ""} ${
              visible ? "visible" : ""
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <img
              src={noticia.urlToImage ? noticia.urlToImage : noticiaImagen}
              alt={noticia.title}
            />
            <span className="etiqueta">
              {index === 0 ? t("des") : t("noticia")}
            </span>
            {/* Ahora el título es navegable con tab */}
            <h3 tabIndex="0">{noticia.title}</h3>
            <p>{noticia.description?.substring(0, 100)}...</p>
            <div className="link-container">
              <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                {t("leerMas")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticiasMuseos;
