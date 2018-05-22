import React from 'react';
import {Button, Panel, Table, Glyphicon} from 'react-bootstrap';

const TablaAsign = ({asignaturas, removeAsign}) => {
    return(
        <Panel>
            <Table fill>
                <tbody>
                    {asignaturas.map((product, i) =>
                        <tr key={i+"b"}>
                            <td>{product.nombre}</td>
                            <td>{product.codigo}</td>
                            <td>
                                <Button bsSize="xsmall" bsStyle="danger" onClick={removeAsign.bind(null,product)}>
                                    <Glyphicon glyph={'trash'}/>
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr><td>{`numero de materias: ${asignaturas.length}`}</td><td></td><td></td></tr>
                </tfoot>
            </Table>
        </Panel>
    )
}

export default TablaAsign;
