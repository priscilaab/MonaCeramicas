import React,  { useState, useEffect } from 'react';
import { Nav, NavItem } from 'reactstrap';
import logo from '../images/logopngg.png';
import logoContato from '../images/logopnggdeitado.png';
import { Link, useLocation } from 'react-router-dom';
import '../css/Menu.css';


function Menu() {

    const loc = useLocation().pathname;
    const [menuColor, setMenuColor] = useState('rgba(216,184,49, 0.5)'); // Amarelo Cor padrão

    // Define a cor do menu com base na localização atual, colors: verde rgba(48,76,25,0.8), amarelo rgba(216,184,49,0.6),
    // azul rgba(1,178,170,0.6), vermelho rgba(206,60,11,0.8)
    useEffect(() => {
        switch (loc) {
            case '/MoniqueAndrade':
                setMenuColor('rgba(1,178,170,0.3)'); // Azul
                break;
            case '/Ceramica':
                setMenuColor('rgba(216,184,49,0.6)'); // Amarelo
                break;
            case '/Evento':
                setMenuColor('rgba(206,60,11,0.6'); // Vermelho
                break;
            case '/Contato':
                setMenuColor('rgba(48,76,25,0.7)'); // Verde
                break;
            case '/Loja':
                setMenuColor('#9b59b6'); // Roxo 
                break;
            default:
                setMenuColor('rgba(216,184,49, 0.5)'); // Cor padrão para outras páginas
        }
    }, [loc]);

     const logoAtual = loc === "/Contato" ? logoContato : logo;

    return (
        <nav className="navbar" style={{ backgroundColor: menuColor }} >
            
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