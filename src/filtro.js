import React from 'react';
import { Form, FormGroup, Table, ControlLabel, FormControl, Grid, Row, Col, Button, Panel, Checkbox, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import misProfesores from './funciones/profesores';
const dias = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes'
]
const tramos = [
  'Cualquier hora del dia',
  '07:00 a 13:00',
  '12:00 a 18:00',
  '07:00 a 14:00',
  '10:00 a 18:00',
  '14:00 a 18:00',
  '12:00 a 18:00',
  'No quiero ver clases'
]
let styles = {
    height: "300px",
    marginBottom:"15px",
    overflow: "auto",
    scrollbarBaseColor:"#ffeaff"
}
class Filtro extends React.Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.state = {
      profesores : [],
      dias : []
    }
  }

  removeProfesor(i){
    let x = this.state.profesores.filter(obj => obj != i)
    this.setState({profesores:x});
  }
  select(e){
    e.preventDefault();
    let {Lunes,Martes,Miercoles,Jueves,Viernes} = this.refs;
    let m = [];
    m.push(Lunes.value);m.push(Martes.value);
    m.push(Miercoles.value);m.push(Jueves.value);
    m.push(Viernes.value);
    this.setState({dias:m});
  };

  add(data){
    let n = [];
    n.push(data)
    let name = this.state.profesores.concat(n).unique();

    this.setState({profesores: name})
  }
  render() {
    return(
      <Grid fluid={false}>
        <button className="btn btn-default" onClick={this.props.regre.bind(null)} style={{marginBottom:'16px'}}><span className="glyphicon glyphicon-home"></span> Regresar
        </button>
        <Row>
          <Col sm = {6}>
            <Panel>
              <Panel.Heading>Preferencias:</Panel.Heading>
              <form onChange={this.select.bind(this)}>
              {dias.map(
                (obj,i) =>
                {return (<Panel.Body key={i}>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      {obj+': '}
                    </label>
                    <div className="col-sm-9">
                      <select className="form-control" ref="tiempo" ref={obj}>
                        {tramos.map((d,i) => <option key={i} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>
                </Panel.Body>)}
              )}
              </form>
            </Panel>
          </Col>
          <Col sm = {6}>
          <div style={styles}>
              <Panel>
                <Panel.Heading>Selecciones los profesores con que no quieres ver clases:</Panel.Heading>
                <Table fill>
                  <tbody>
                    {
                      misProfesores(this.props.data).map((product, i) =>
                        <tr key={i+"c"}>
                          <td>{product}</td>
                          <td>
                            <Button bsSize="xsmall" bsStyle="primary" onClick={this.add.bind(this, product)}>
                              <Glyphicon glyph={'pushpin'}/>
                            </Button>
                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </Table>
              </Panel>
            </div>
            <Panel bsStyle="danger">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Lista Negra</Panel.Title>
              </Panel.Heading>
              <Table fill>
            		<tbody>
                  {this.state.profesores.map((product, i) =>
                    <tr key={i}>
                      <td>{product}</td>
                      <td>
                        <Button bsSize="xsmall" bsStyle="danger" onClick={this.removeProfesor.bind(this,product)}>
                          <Glyphicon glyph={'trash'}/>
                        </Button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
              {this.state.profesores.length==0?<Panel.Body>Nadie aun!</Panel.Body>:null}
            </Panel>
          </Col>
        </Row>
        <Button className="btn btn-success btn-block" onClick={this.props.onClick.bind(null, this.state)}>
          Enviar
        </Button>
      </Grid>
    )
  }
}

export default Filtro;
