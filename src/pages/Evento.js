import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { format } from 'date-fns'; // Importe a função 'format' do date-fns: npm install date-fns
import ItemEventos from "../components/ItemEventos";
import imagemEvento1 from '../images/imagem_evento1.jpg';

function Eventos() {
  const eventos = [
    {
      titulo: 'Evento 1',
      data: '2023-03-15', // Use o formato 'YYYY-MM-DD' para datas
      descricao: 'Descrição do Evento 1',
      imagem:  imagemEvento1,
    },
    {
      titulo: 'Evento 2',
      data: '2023-03-10',
      descricao: 'Descrição do Evento 2',
      imagem: 'https://picsum.photos/id/1016/800/400',
    },
    // Adicione mais eventos conforme necessário
  ];

  // Ordenar eventos por data do mais recente para o mais antigo
  const eventosOrdenados = eventos.sort((a, b) => new Date(b.data) - new Date(a.data));

  return (
    <Container>
      {eventosOrdenados.map((evento, index) => (
        <Row key={index} className="mb-3">
          <Col>
            <ItemEventos
              evento={{
                ...evento,
                data: format(new Date(evento.data), 'dd/MM/yyyy'), // Formata a data para dia/mês/ano
              }}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Eventos;
