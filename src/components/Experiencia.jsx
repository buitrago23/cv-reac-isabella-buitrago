import React from "react";

export default function Experiencia({ experiencia }) {
  if (!experiencia || experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia</h3>
        <p>No hay experiencia registrada.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia</h3>
      <ul>
        {experiencia.map(({ id, puesto, empresa, periodo, descripcion }) => (
          <li key={id}>
            <strong>{puesto}</strong> - {empresa} ({periodo})
            <br />
            <span>{descripcion}</span>
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}

