import React from 'react';
import PropTypes from 'prop-types';
import {Form, Nav, NavItem, Navbar,FormControl, Grid, Row, Col, Button} from 'react-bootstrap';
import {addAsign, removeAsign, loadAsign} from './actionCreators';
import Option from './components/option';
import TablaAsign from './components/tablaAsign';
import { connect } from 'react-redux';
import Horario from './horario.js';
import store from './store';

const t = {
  bsStyle:"danger",
  glyph:"trash",
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.cambiar = this.cambiar.bind(this);
  }
  cambiar(){
    let x = this.refs.selc.value;
    let url = "/"+x;
    
    store.dispatch(loadAsign({url:url,type:"Load_asignaturas"}))
  }
  render(){
    return(
      <div>
        {this.props.horarios.length == 0?
        <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              Generador de Horarios:
            </Navbar.Brand>
            <Navbar.Form pullLeft>
              <form onChange={this.cambiar}>
                <select className="form-control" ref="selc" placeholder="select">
                  <option value="petroleo.json" >Petróleo</option>
               </select>
              </form>
            </Navbar.Form>
          </Navbar.Header>
        </Navbar>
          <Grid fluid={false}>
            <Row>
              <Col sm = {6}>
                <Option carrera={this.props.carrera} addAsign = {this.props.addAsign} />
              </Col>
              <Col sm = {6}>
                <TablaAsign asignaturas={this.props.cart} removeAsign = {this.props.removeAsign} />
              </Col>
            </Row>
				  {this.props.cart.length>1?
            <Button className="btn btn-success btn-block"  onClick = {
              ()=>this.props.goHorario(this.props.cart.map(obj=> obj.codigo))}>Enviar</Button>:null
          }
          </Grid></div>:
          <Horario horarios={this.props.horarios} data={this.props.data} />
        }
      </div>
    )
  }
};

const mapStateToprops = state => {
  return {
    carrera: state.carrera ,
    cart: state.cart,
    horarios: state.materias,
    data: state.data
  }
};

const mapDispatchToprops = dispatch => {
  return {
    goHorario(data){
      dispatch(loadAsign({url:"/horarios/"+JSON.stringify(data),type:"Materias_a_inscribir"}));
    },
    removeAsign(product){
      dispatch(removeAsign(product));
    },
    addAsign(product){
      dispatch(addAsign(product));
    }
  }
};

export default connect(mapStateToprops, mapDispatchToprops)(App);
