var express = require('express');
var connect = require('../config/dataBase');
var sqlForArray = require('../../lib/sqlForArray/sqlForArray');
var constructorData = require('../../lib/constructorData');

/* GET horarios json. */
 module.exports = (req, res, next) => {
  var query =[
  'select s.profesor, s.id_materia, s.num_seccion, m.nombre',
  ',b.hora_entrada,b.hora_salida,b.dia,b.aula from secciones',
  ' as s inner join materias as m inner join bloques  as b where ',
  ].join("");
  /* parseamos el array de codigos*/
  var materias = JSON.parse(req.params.materias);
  /* Verificamos que sean solo codigos de materias,
    en caso de que no!les pasamos otro parametro
    evitando un ataque a la bases de datos.
  */
 	var m = materias.map(obj => {
      if(/[0-9]/g.test(obj)) {
        return '(b.id_seccion = s.id and s.id_materia = m.id and m.id='+obj+')';
      } else {
        return '(b.id_seccion = s.id and s.id_materia = m.id and m.id=0000000)';
      }
  });
  /*Consultamos y creamos un array con sqlForArray y constructorData.
    sqlForArray se encarga de dividir la consulta en array de materias
    y constructorData divide las materias en un array de secciones
  */
  connect.query(query+m.join(' or '), function (error, results, fields) {
    let n = [];
    for (let i = 0; i < materias.length; i++) {
      n.push(constructorData(sqlForArray(`select * from m where m.id_materia="${materias[i]}"`,results)));
    };
    res.json(n);
  });
};
