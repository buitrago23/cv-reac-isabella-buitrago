import React from "react";
import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Habilidades from "./components/Habilidades.jsx";
import { cabecera, perfil, educacion, experiencia, stackTecnologias, proyectos, habilidades } from "./data/cvData";

function App() {
  return (
    <div className="app-container">
      <CabeceraCV nombre={cabecera.nombre} profesion={cabecera.profesion} />
      <Perfil texto={perfil.texto} />
      <Educacion estudios={educacion} />
      <Experiencia experiencia={experiencia} />
      <StackTecnologias tecnologias={stackTecnologias} />
      <Proyectos proyectos={proyectos} />
      <Habilidades habilidades={habilidades} />
    </div>
  );
}

export default App;