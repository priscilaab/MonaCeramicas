import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import logo from '../images/logopngg.png';
import logoContato from '../images/logopnggdeitado.png';
import { Link, useLocation } from 'react-router-dom';
import '../css/Menu.css';


function Menu() {

    const loc = useLocation().pathname;
    const logoAtual = loc === "/Contato" ? logoContato : logo;

    return (
        <nav className="navbar" >
            
            <Nav vertical>
                <NavItem className="navbar-expand-lg">
                    <Link to="/"  className="custom-link">
                 <img className="logo" src={logoAtual}
                alt='Mona Cerâmica logo'/>
               
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
        </nav>
    );

}
export default Menu;