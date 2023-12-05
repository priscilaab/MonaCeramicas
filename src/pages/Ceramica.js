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
import cumbucapretamarromflor from '../images/cumbucapretamarromflor.png';



function Ceramica() {
  const [fotos] = useState([
    { src: molheirafolha, alt: 'Molheira Folha', titulo: 'Molheira Folha', legenda: '300Ml, ⌀ 4,5cm'},
    { src: conjuntomarrom, alt: 'Conjunto Marrom', titulo: 'Conjunto Marrom', legenda: '400ml, ⌀ 5,6cm' },
    { src: cumbucabranca, alt: 'Cumbuca Branca', titulo: 'Cumbuca Branca', legenda: '500ml, ⌀ 10cm' },
    { src: cumbucadentro, alt: 'Cumbuca Dentro', titulo: 'Cumbuca Dentro', legenda: '700ml, ⌀ 15cm ' },
    { src: cumbucapreta, alt: 'Cumbuca Preta', titulo: 'Cumbuca Preta', legenda: '600ml, ⌀ 18cm' },
    { src: cumbucaverde, alt: 'Cumbuca Verde', titulo: 'Cumbuca Verde', legenda: '200ml ⌀ 20cm' },



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
      <Col>
        {/* Álbum (coluna central) */}
        <Row className="album-container">
          <Album fotos={fotos} onFotoClick={handleFotoClick} />
        </Row>
      </Col>
      <Col>
        {/* Visualização em destaque (coluna à direita) */}
        {fotoDestaque && <Destaque foto={fotoDestaque} />}
      </Col>
    </Row>
  );
}

export default Ceramica;
