import React from 'react';
import '../css/Destaque.css';

function Destaque({ foto }) {
  return (
    <div className="destaque-container">
      <img src={foto.src} alt={foto.alt} className="img-fluid" />
      <div className="legenda">
        <h3>{foto.titulo}</h3>
        <p>{foto.legenda}</p>
      </div>
    </div>
  );
}

export default Destaque;
