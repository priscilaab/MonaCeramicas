import React from 'react';

function Foto({ src, alt, onClick }) {
  return (
    <img
      src={src}
      alt={alt}
      className="img-fluid foto-thumb"
      onClick={onClick}
    />
  );
}

export default Foto;
