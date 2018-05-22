import React from 'react';
import { Navbar,Table, Nav, NavItem } from 'react-bootstrap';
import Filtro from './filtro';

const Horario = props => {
  return(
    <div>
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            Un Paso mas:
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem href="https://github.com/anderperez15/fancy">
            Open Source
          </NavItem>
        </Nav>
      </Navbar>
      <Filtro resultados = {props.horarios} data = {props.data}/>
    </div>
  )
};

export default Horario;
