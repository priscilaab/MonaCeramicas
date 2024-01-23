import MoniqueA from '../images/MoniqueA.png';
import { Row, Col } from 'reactstrap';
import '../css/MoniqueAndrade.css';
import React from 'react';


function MoniqueAndrade() {
    return (
        <div>
            <Row>
                <Col xs="12" md="6" className="mx-auto mb-3 ">
                    <img
                        src={MoniqueA}
                        alt="Monique Andrade"
                        className="img-fluid imagem mx-auto d-block"

                    />
                </Col>
                <Col xs="12" md="6" className='texto text-center pt-5'>
                    <div className="espaco-texto">
                    <p>Olá! Eu sou Monique Andrade! (MON)ique + (A)ndrade, criada pra e-mail no ensino médio, virou meu apelido eleito pelos amigos e eu amo! desde então.</p>
                   
                    <p> Em uma pesquisa rápida: Mona significa 'pequena nobre', 'aquela que tem propósitos', 'mulher de objetivos'!</p>
                    
                    <p> Confesso que adorei o que encontrei, pois também compõe o que me faz estar aqui nessa conversa. E falando em propósito, tenho encontrado o meu, dentre outras formas, através da cerâmica! Sempre fui muito artista e empolgada com a vida. Na infância era filmada entrevistando e sendo entrevistada. Frequentava teatro, ia looonge ouvindo música clássica! Estimulada com atividades manuais, pintava, brincava de massinha, fazia colagens, costurava roupas pra boneca, sempre inventando! e essa bagagem se apresenta agora como um estilo de vida!</p>
                </div>
                </Col>
            </Row>
        </div>
    );
}

export default MoniqueAndrade;