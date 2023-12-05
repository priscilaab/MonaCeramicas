import { Col } from 'reactstrap';
import Foto from './Foto';
import '../css/Album.css';

function Album({ fotos, onFotoClick }) {
  return (
    <Col xs="4">
      {fotos.map((foto, index) => (
        <Foto
          key={index}
          src={foto.src}
          alt={foto.alt}
          onClick={() => onFotoClick(index)}
        />
      ))}
    </Col>
  );
}

export default Album;
