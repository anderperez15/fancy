import React from 'react';
import { findDOMNode } from 'react-dom'
import {Form, Button, Panel, Table, Glyphicon} from 'react-bootstrap';

let styles = {
    height: "500px",
    overflow: "auto",
    scrollbarBaseColor:"#ffeaff",
    paddinButtom:"10px"
}

class Option extends React.Component {
    constructor(props){
        super(props);
        this.select = this.select.bind(this);

        this.state = {
            seme: 0
        };
    };

    select(e){
        e.preventDefault();
        const {select} = this.refs;
        this.setState({seme:select.value})
    }

    render() {
        return(<div style={styles}>
            {this.props.carrera.semestres.length>1?
            <Panel>
                <Panel.Heading>
                    <Form onChange={this.select}>
                        <div className="form-group">
                            <select className="form-control" ref="select" >
                                {
                                    this.props.carrera.semestres.map((obj,i) =>
                                        <option key={i+"a"} value={i}>{ obj.semestre }</option>
                                    )
                                }
                            </select>
                        </div>
                    </Form>
                </Panel.Heading>
                <Table fill>
                    <tbody>
                        {this.props.carrera.semestres[this.state.seme].materias.map((product, i) =>
                            <tr key={i+"c"}>
                                <td>{product.nombre}</td>
                                <td>{product.codigo}</td>
                                <td>
                                    <Button bsSize="xsmall" bsStyle="primary" onClick={this.props.addAsign.bind(null,product)}>
                                        <Glyphicon glyph={'pushpin'}/>
                                    </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Panel>:null}
        </div>)
    }
};


export default Option;
