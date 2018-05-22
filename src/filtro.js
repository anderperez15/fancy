import React from 'react';
import { Form, FormGroup, Table, ControlLabel, FormControl, Grid, Row, Col, Button, Panel, Checkbox, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import misProfesores from './funciones/profesores';
const dias = [
  'Lun',
  'Mar',
  'Mie',
  'Jue',
  'Vie'
]
const tramos = [
  '07:00 a 13:00',
  '12:00 a 18:00',
  'Cualquier hora del dia',
  'Libre'
]
let styles = {
    height: "400px",
    overflow: "auto",
    scrollbarBaseColor:"#ffeaff"
}
class Filtro extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      profesores : [],
      dias : [],
      horas_lapsos:[]
    }
  }

  select(e){
    e.preventDefault();
    const {dia,tiempo} = this.refs;
    this.setState({dias:dia})
    console.log(dia.value)
  };

  add(data){
    let name = this.state.profesores;
    let other = [];
    other = other.concat(name);
    this.setState({profesores: other})
    alert('sssss')
  }
  render() {
    return(
      <Grid fluid={false}>
        <Row>
          <Col sm = {6}>
            <Form>
                <ControlLabel>Configure cada dia</ControlLabel>
                <select className="form-control" ref="dia">
                  {dias.map((d,i) => <option key={i} value={d}>{d}</option>)}
                </select>
                <ControlLabel>A que hora quieres ver clases</ControlLabel>
                <select className="form-control" ref="tiempo">
                  {tramos.map((d,i) => <option key={i} value={d}>{d}</option>)}
                </select><br/>
                <Button onClick={this.select}>
                  Añadir
                </Button>
            </Form>
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
                            <Button bsSize="xsmall" bsStyle="primary" onClick={()=>this.add(product)}>
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
          </Col>
        </Row>
        <Row style = {{padding:"10px"}}>
          <Col sm = {6}>

          </Col>
          <Col sm = {6}>
            <Panel bsStyle="danger">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Lista Negra</Panel.Title>
              </Panel.Heading>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Filtro;
