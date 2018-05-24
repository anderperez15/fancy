import React from 'react';
import { Navbar,Table, Nav, NavItem } from 'react-bootstrap';
import Filtro from './filtro';
import ListHorario from './components/listHorario';
import store from './store'
import filtra from './funciones/filtra';

class Horario extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      horario:[]
    };
    this.regre = this.regre.bind(this);
  }
  filtrar(data){
    document.body.scrollTop=0;
    let respuesta = filtra(data,this.props.horarios);
    this.setState({horario:respuesta})
  }
  reset(){
    this.setState({horario:[]})
    document.body.scrollTop=0;
  }
  regre(){
    store.dispatch({type:"regresar"});
    document.body.scrollTop=0;
  }
  render(){
    return(
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              {this.state.horario.length?"Hosting por metr0":"Un paso mas:"}
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem href="https://github.com/anderperez15/fancy">
              Open Source
            </NavItem>
          </Nav>
        </Navbar>
        {this.state.horario.length?
        <ListHorario h={this.state.horario} r = {this.reset.bind(this)}/>:
        <Filtro regre = {this.regre}resultados = {this.props.horarios} data = {this.props.data} onClick={this.filtrar.bind(this)}/>
        }
      </div>
    )
  }
};

export default Horario;
