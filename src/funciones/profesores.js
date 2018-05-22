Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

var sqlForArray = require('../../lib/sqlForArray/sqlForArray')

const misProfesores = data => {
  let profesores = [];
  for (let n of data) {
    profesores = profesores.concat(sqlForArray('select data.p as profesor from data', n))
  };
  profesores = profesores.map(o => o.profesor)
  return  profesores.unique();
}

export default misProfesores;
