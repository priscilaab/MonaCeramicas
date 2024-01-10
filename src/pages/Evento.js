import React from 'react';
import '../css/Evento.css';
import { Container, Row, Col } from 'reactstrap';
import { format } from 'date-fns'; // Importar a função 'format' do date-fns: npm install date-fns
import ItemEventos from "../components/ItemEvento";
import evento from '../images/evento.png';
import embreve from '../images/embreve.png';



function Eventos() {
  const eventos = [
    {
      titulo: '1° Feira Vegana - Vivenda Vos',
      data: '2023-03-15', // Use o formato 'YYYY-MM-DD' para datas
      descricao: 'Horário: 09h às 19h  Local:Avenida General Gabriel da Fonseca  Número:369A - Tremembé',
      link:'',
      imagem: evento,
    },
    {
      titulo: 'Em Breve Novidades',
      data: '2023',
      descricao: '',
      link:'',
      imagem: embreve,
    },
    // Adicione mais eventos conforme necessário
  ];

  // Ordenar eventos por data do mais recente para o mais antigo
  const eventosOrdenados = eventos.sort((a, b) => new Date(b.data) - new Date(a.data));

  return (
    <Container>
      {eventosOrdenados.map((evento, index) => (
        <Row key={index} className="mb-3">
          <Col className="text-center">
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
