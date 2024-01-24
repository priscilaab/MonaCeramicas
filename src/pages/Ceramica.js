import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import Album from '../components/Album';
import Destaque from '../components/Destaque';
import molheirafolha from '../images/molheirafolha.png';
import conjuntomarrom from '../images/conjuntomarrom.png';
import cumbucabranca from '../images/cumbucabrancafrente.png';
import cumbucadentro from '../images/cumbucadentro.png';
import cumbucapreta from '../images/cumbucapreta.png';
import cumbucaverde from '../images/cumbucaverde.png';




function Ceramica() {
  const [fotos] = useState([
    { src: molheirafolha, alt: 'Molheira Folha', titulo: 'Molheira Folha', legenda: ''},
    { src: conjuntomarrom, alt: 'Conjunto Marrom', titulo: 'Mocha Set', legenda: '' },
    { src: cumbucabranca, alt: 'Cumbuca Branca', titulo: 'Cumbuca Rústica', legenda: '' },
    { src: cumbucadentro, alt: 'Cumbuca', titulo: 'Cumbuca Rústica', legenda: '' },
    { src: cumbucapreta, alt: 'Cumbuca Preta', titulo: 'Cumbuca Utilitária Espiral', legenda: '345ml, ⌀ 16cm' },
    { src: cumbucaverde, alt: 'Cumbuca Verde', titulo: 'Pires Utilitário Orgânico', legenda: 'P ⌀ 8,5cm, M ⌀ 12,5cm' },
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
      <Col className="imagem-container">
        {/* Visualização em destaque (à esquerda) */}
        {fotoDestaque && <Destaque foto={fotoDestaque} />}
      </Col>
      <Col md="3">
        {/* Álbum (coluna à direita) */}
        <Row >
          <Album fotos={fotos} onFotoClick={handleFotoClick} />
        </Row>
      </Col>
    </Row>
  );
  
}

export default Ceramica;
