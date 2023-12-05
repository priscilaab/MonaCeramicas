import MoniqueA from '../images/MoniqueA.png';
import { Row, Col } from 'reactstrap';
import '../css/MoniqueAndrade.css';
import React from 'react';


function MoniqueAndrade() {
    return (
        <div>
            <Row className='alinhar'>
                <Col xs="7">

                    <img src={MoniqueA} alt="Monique Andrade"
                        style={{ width: "100%", height: "auto", marginTop: "50px", borderRadius: "10px" }} />
                </Col>
                <Col xs="5" className='texto d-flex flex-column justify-content-center text-center'>

                    <p >Olá!
                        Eu sou Monique Andrade!

                        (MON)ique + (A)ndrade,

                        criada pra e-mail no ensino médio, virou meu apelido eleito pelos amigos e eu amo! desde então.</p>
                        <br/>

                 <p> Em uma pesquisa rápida: Mona significa 'pequena nobre', 'aquela que tem propósitos', 'mulher de objetivos'!</p>
                 <br/>
                       <p> Confesso que adorei o que encontrei, pois também compõe o que me faz estar aqui nessa conversa.

                        E falando em propósito, tenho encontrado o meu, dentre outras formas, através da cerâmica!

                        Sempre fui muito artista e empolgada com a vida. Na infância era filmada entrevistando e sendo entrevistada.

                        Frequentava teatro, ia looonge ouvindo música clássica!

                        Estimulada com atividades manuais, pintava, brincava de massinha, fazia colagens, costurava roupas pra boneca, sempre inventando!

                        e essa bagagem se apresenta agora como um estilo de vida!</p>

                </Col>
            </Row>
            <div>

            </div>


        </div>
    );
}
export default MoniqueAndrade