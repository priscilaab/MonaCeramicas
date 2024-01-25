import { Col, Row, Button } from "reactstrap";
import ItemForm from "../components/ItemForm";
import React from 'react';
import '../css/Contato.css';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'; // Importa os ícones do Bootstrap





function Contato() {

    return (
        <div className="container">

            <Row className="my-4">
                <Col>
                    <h5 className="display-3 text-center py-4">Fale com a Mona</h5>
                </Col>
            </Row>
            <Row className="mb-4 mx-3 d-flex justify-content-center" >
                <Col className="my-sm-7" xs="7" >
                    <ItemForm className="my-sm-4 text-center" label="Nome" name="nome" type="text" ph="Digite seu nome" />
                    <ItemForm label="Email" name="email" type="email" ph="Digite seu e-mail" />
                    <ItemForm label="Telefone" name="telefone" type="tel" ph="Digite seu telefone" />
                    <ItemForm label="Assunto" name="assunto" type="text" ph="Informe o assunto da mensagem" />
                    <ItemForm label="Mensagem" name="mensagem" type="text" ph="Digite a mensagem a ser encaminhada para nossa equipe" />
                    <Button className="button" block>Enviar</Button>
                    {/* Redes Sociais */}
                    <div className="d-flex justify-content-center mt-4" style={{ padding: '0 10px' }}>
                        <a href="https://www.instagram.com/monaceramista?igsh=MTMOd2oemh1eHMxYQ==/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                            <BsInstagram />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+5512996327147&text=Olá! Estou entrando em contato." target="_blank" rel="noopener noreferrer" className="btn btn-outline-success ms-3">
                            <BsWhatsapp />
                        </a>
                    </div>
                </Col>

            </Row>
        </div>
    )
}
export default Contato;