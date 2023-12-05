import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import Album from '../components/Album';
import Destaque from '../components/Destaque';
import imagemCeramica1 from '../images/imagem_ceramica1.jpg';

function Ceramica() {
  const [fotos] = useState([
    { src: imagemCeramica1, alt: 'Foto 1', titulo: 'Título 1', legenda: 'Legenda 1' },
    { src: 'url_da_foto2.jpg', alt: 'Foto 2', titulo: 'Título 2', legenda: 'Legenda 2' },
    // Adicione mais fotos conforme necessário
  ]);

  const [fotoDestaque, setFotoDestaque] = useState(null);

  const handleFotoClick = (index) => {
    setFotoDestaque(fotos[index]);
  };

  useEffect(() => {
    // Exibir a primeira foto em destaque ao carregar a página
    setFotoDestaque(fotos[0]);
  }, []); // O segundo parâmetro ([]) garante que este efeito só ocorrerá uma vez, equivalente a componentDidMount

  return (
    <Row>
      <Col xs="6">
        {/* Álbum (coluna central) */}
        <Row className="album-container">
          <Album fotos={fotos} onFotoClick={handleFotoClick} />
        </Row>
      </Col>
      <Col xs="4">
        {/* Visualização em destaque (coluna à direita) */}
        {fotoDestaque && <Destaque foto={fotoDestaque} />}
      </Col>
    </Row>
  );
}

export default Ceramica;
