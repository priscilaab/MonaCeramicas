import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import '..css/Evento.css'; 

const ItemEvento = ({ evento }) => {
  return (
    <Card className="evento-card">
      <CardImg top width="100%" src={evento.imagem} alt={evento.titulo} />
      <CardBody>
        <CardTitle>{evento.titulo}</CardTitle>
        <CardSubtitle>{evento.data}</CardSubtitle>
        <CardText>{evento.descricao}</CardText>
      </CardBody>
    </Card>
  );
};

export default ItemEvento;

  