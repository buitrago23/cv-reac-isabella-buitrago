import React from "react";

export default function Proyectos({ proyectos }) {
  if (!proyectos || proyectos.length === 0) {
    return (
      <section>
        <h3>Proyectos</h3>
        <p>No hay proyectos registrados.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Proyectos</h3>
      <ul>
        {proyectos.map(({ id, nombre, descripcion, tecnologias }) => (
          <li key={id}>
            <strong>{nombre}</strong>: {descripcion}
            <br />
            <em>Tecnologías:</em> {tecnologias.join(", ")}
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
