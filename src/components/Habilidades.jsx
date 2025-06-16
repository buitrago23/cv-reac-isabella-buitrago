import React from "react";

export default function Habilidades({ habilidades }) {
  if (!habilidades || habilidades.length === 0) {
    return (
      <section>
        <h3>Habilidades</h3>
        <p>No hay habilidades registradas.</p>
        <hr />
      </section>
    );
  }

  return (
    <section>
      <h3>Habilidades</h3>
      <ul>
        {habilidades.map((hab, idx) => (
          <li key={idx}>{hab}</li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
