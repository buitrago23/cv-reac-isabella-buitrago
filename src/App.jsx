import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import { cabecera, perfil, educacion, experiencia, stackTecnologias } from "./data/cvData";

function App() {
  return (
    <div>
      <CabeceraCV nombre={cabecera.nombre} profesion={cabecera.profesion} />
      <Perfil texto={perfil.texto} />
      <Educacion estudios={educacion} />
      <Experiencia experiencia={experiencia} />
      <StackTecnologias tecnologias={stackTecnologias} />
    </div>
  );
}

export default App;