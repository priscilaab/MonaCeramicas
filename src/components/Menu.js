import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import logo from '../images/logograndebranco.png';
import logoContato from '../images/logopnggdeitado.png';
import { Link, useLocation } from 'react-router-dom';
import '../css/Menu.css';


function Menu() {

    const loc = useLocation().pathname;
    const logoAtual = loc === "/Contato" ? logoContato : logo;

    return (
        <div>
            <img className="logo" src={logoAtual}
                alt='Mona Cerâmica logo'
                style={{
                    maxWidth: '60%', height: 'auto', margin: '0', alignSelf: 'flex-start', top: '30px',
                    left: '30px'
                }} />
            <Nav vertical>
                <NavItem>
                    <Link to="/"  className="custom-link">

                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/MoniqueAndrade"  className="custom-link">
                        Monique Andrade
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/Ceramica"  className="custom-link">
                        Cerâmica
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/Evento"  className="custom-link">
                        Evento
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/Contato"  className="custom-link" >
                        Contato
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/Loja"  className="custom-link">
                        Loja
                    </Link>
                </NavItem>

            </Nav>
        </div>
    );

}
export default Menu;