import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        buscar: "Buscar",
        departamentos: "Departamentos",
        lugares: "Lugares",
        sobre: "Quienes somos",
        museo: "Museo",
        titulo: "Adéntrate en la historia",
        descubre: "Descubre lo más destacado",
        info: "Nuestro compromiso es acercarte obras emblemáticas y fomentar la apreciación artística a través de la tecnología, el acceso abierto y la experiencia visual.",
        destacado: "Lo más destacado",
        leerMas: "Leer Más",
        des: "Destacado",
        noticia: "Noticia",
        manual: "¿Desea selección manual?",
        museosCercanos: "¿Desea ver los museos cercanos?",
        cancelar: "Cancelar",
        esp: "Español",
        ing: "Inglés",
        it: "Italiano",
        fr: "Francés",
        cargandoObras: "Cargando obras...",
        desconocido: "Desconocido",
        artista: "Artista",
        fecha: "Fecha",
        cargando: "Cargando...",
      },
    },
    en: {
      translation: {
        buscar: "Search",
        departamentos: "Departaments",
        lugares: "Places",
        sobre: "About us",
        museo: "Museum",
        titulo: "Delve into history",
        descubre: "Discover the highlights",
        info: "Our commitment is to bring you emblematic works and encourage artistic appreciation through technology, open access and visual experience.",
        destacado: "Highlights",
        leerMas: "Read More",
        des: "Outstanding",
        noticia: "New",
        manual: "¿Do you want manual selection?",
        museosCercanos: "¿Do you want to see nearby museums?",
        cancelar: "Cancel",
        esp: "Spanish",
        ing: "English",
        it: "Italian",
        fr: "French",
        cargandoObras: "Loading works...",
        desconocido: "Unknown",
        artista: "Artist",
        fecha: "Date",
        cargando: "Loading...",
      },
    },
    it: {
      translation: {
        buscar: "Cercace",
        departamentos: "Dipartimenti",
        lugares: "Luoghi",
        sobre: "Chi siamo",
        museo: "Museo",
        titulo: "Immergiti nella storia",
        descubre: "Scopri i punti salienti",
        info: "Il nostro impegno è offrirti opere emblematiche e incoraggiare l'apprezzamento artistico attraverso la tecnologia, l'accesso aperto e l'esperienza visiva.",
        destacado: "I punti salienti",
        leerMas: "Leggi di più",
        des: "Eccezionale",
        noticia: "Notizia",
        manual: "¿Vuoi la selezione manuale?",
        museosCercanos: "¿Vuoi vedere i musei vicini?",
        cancelar: "Cancellare",
        esp: "Spagnolo",
        ing: "Inglese",
        it: "Italiano",
        fr: "Francese",
        cargandoObras: "Caricamento opere...",
        desconocido: "Sconosciuto",
        artista: "Artista",
        fecha: "Data",
        cargando: "Caricamento...",
      },
    },
    fr: {
      translation: {
        buscar: "Chercher",
        departamentos: "Départements",
        lugares: "Lieux",
        sobre: "Sur nous",
        museo: "Musée",
        titulo: "Plongez dans l'histoire",
        descubre: "Découvrez les temps forts",
        info: "Notre engagement est de vous proposer des œuvres emblématiques et d'encourager l'appréciation artistique grâce à la technologie, au libre accès et à l'expérience visuelle.",
        destacado: "Les incontournables",
        leerMas: "En savoir plus",
        des: "Remarquable",
        noticia: "Nouvelles",
        manual: "¿Voulez-vous une sélection manuelle ?",
        museosCercanos: "¿Voulez-vous voir les musées à proximité?",
        cancelar: "Annuler",
        esp: "Espagnol",
        ing: "Anglais",
        it: "Italien",
        fr: "Français",
        cargandoObras: "Chargement des œuvres...",
        desconocido: "Inconnu",
        artista: "Artiste",
        fecha: "Date",
        cargando: "Chargement...",
      },
    },
  },
  lng: "es", // idioma por defecto
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
