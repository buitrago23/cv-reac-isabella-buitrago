export default function Experiencia() {
  const experiencia = [
      { id: 1, puesto: "Monitora de Patinaje Recreativo", empresa: "Escuela Ruedas y Pasos", periodo: "2019-2020" },
      { id: 1, puesto: "Asistente de Producción Musical", empresa: "Estudio Sonarte", periodo: "2021-2022" }
      { id: 3, puesto: "Instructora de Baile Urbano", empresa: "Academia DanceX", periodo: "2021-2023" },
      { id: 4, puesto: "Patinadora Artística", empresa: "Club Rueda Libre", periodo: "2018-2020" },
      { id: 5, puesto: "Asistente de Taller de Pintura", empresa: "Casa Cultural Colores", periodo: "2019-2021" },
      { id: 6, puesto: "Entrenadora de Natación Infantil", empresa: "Piscinas AquaFit", periodo: "2020-2022" },
      { id: 7, puesto: "Cantante Coral", empresa: "Coro Voces del Sol", periodo: "2017-2019" },
      { id: 8, puesto: "Coreógrafa de Eventos Escolares", empresa: "Colegio Nueva Generación", periodo: "2016-2018" },
      { id: 9, puesto: "Animadora y Cantante en Eventos", empresa: "ShowKids Producciones", periodo: "2022-2023" },
      { id: 10, puesto: "Coordinadora de Actividades Artísticas", empresa: "Fundación ArteVivo", periodo: "2023-2024" }

  ];

  // Renderiza condicionalmente si no hay experiencia
  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
