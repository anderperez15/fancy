import React from 'react';
import PropTypes from 'prop-types';
import {Form, Nav, NavItem, Navbar,FormControl, Grid, Row, Col, Button} from 'react-bootstrap';
import {addAsign, removeAsign, loadAsign} from './actionCreators';
import Option from './components/option';
import TablaAsign from './components/tablaAsign';
import { connect } from 'react-redux';
import Horario from './horario.js';

const t = {
  bsStyle:"danger",
  glyph:"trash",
}

const App = props =>{
  return(
    <div>
      {props.horarios.length == 0?
      <div>
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            Generador de Horarios:
          </Navbar.Brand>
          <Navbar.Form pullLeft>
            <FormControl componentClass="select" placeholder="select">
              <option value="petroleo.json">Petróleo</option>
              <option value="sistemas.json">Sistemas</option>
            </FormControl>
          </Navbar.Form>
        </Navbar.Header>
      </Navbar>
        <Grid fluid={false}>
          <Row>
            <Col sm = {6}>
              <Option carrera={props.carrera} addAsign = {props.addAsign} />
            </Col>
            <Col sm = {6}>
              <TablaAsign asignaturas={props.cart} removeAsign = {props.removeAsign} />
            </Col>
          </Row>
				{props.cart.length>1?
          <Button className="btn btn-success btn-block"  onClick = {
            ()=>props.goHorario(props.cart.map(obj=> obj.codigo))}>Enviar</Button>:null
        }
        </Grid></div>:
        <Horario horarios={props.horarios} data={props.data} />
      }
    </div>
  )
};

const mapStateToProps = state => {
  return {
    carrera: state.carrera ,
    cart: state.cart,
    horarios: state.materias,
    data: state.data
  }
};

const mapDispatchToProps = dispatch => {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
