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
    { src: molheirafolha, alt: 'Molheira Folha', titulo: 'Molheira Folha', legenda: '100Ml, ⌀ 4,5cm'},
    { src: conjuntomarrom, alt: 'Conjunto Marrom', titulo: 'Conjunto Marrom', legenda: '150ml, ⌀ 5,6cm' },
    { src: cumbucabranca, alt: 'Cumbuca Branca', titulo: 'Cumbuca Branca', legenda: '200ml, ⌀ 10cm' },
    { src: cumbucadentro, alt: 'Cumbuca', titulo: 'Cumbuca', legenda: '230ml, ⌀ 15cm ' },
    { src: cumbucapreta, alt: 'Cumbuca Preta', titulo: 'Cumbuca Preta', legenda: '250ml, ⌀ 18cm' },
    { src: cumbucaverde, alt: 'Cumbuca Verde', titulo: 'Cumbuca Verde', legenda: '300ml ⌀ 20cm' },
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
