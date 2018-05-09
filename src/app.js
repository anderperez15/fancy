import React from 'react';
import PropTypes from 'prop-types';
import {Form, Navbar, Grid, Row, Col, Button} from 'react-bootstrap';
import {addAsign, removeAsign} from './actionCreators'; 
import Option from './components/option';
import TablaAsign from './components/tablaAsign';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import loadAsign from './actionCreators';

const style = {
    marginTop:"60px"
};
const t = {
    bsStyle:"danger",
    glyph:"trash",
}

const App = props =>{
    return(
        <div>
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Petróleo</a>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link to={"/sss"}><a href="#">Sistemas</a></Link>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
            <Grid style={style} fluid={false}>
                <Row>
                    <Col sm = {6}>
                       <Option carrera={props.carrera} addAsign = {props.addAsign} />
                    </Col>
                    <Col sm = {6}>
                        <TablaAsign asignaturas={props.cart} removeAsign = {props.removeAsign} />
                    </Col>
                </Row>
				{props.cart.length>2?<Button className="btn btn-success btn-block" >Enviar</Button>:null}
            </Grid>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        carrera: state.horario.carrera ,
        cart: state.horario.cart
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeAsign(product){
           dispatch(removeAsign(product)); 
        },
        addAsign(product){
            dispatch(addAsign(product)); 
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
