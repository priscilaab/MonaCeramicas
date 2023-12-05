import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import '../css/Evento.css'; 

const ItemEvento = ({ evento }) => {
  return (
    <Card className="evento-card">
      <CardImg width="20%" src={evento.imagem} alt={evento.titulo} />
      <CardBody className='text-center'>
        <CardTitle>{evento.titulo}</CardTitle>
        <CardSubtitle>{evento.data}</CardSubtitle>
        <CardText>{evento.descricao}</CardText>
      </CardBody>
    </Card>
  );
};

export default ItemEvento;

  