const constructorData = data => {
  let count = 0;
  let r = [];
  let x = {};
  for (let i = 0; i < data.length; i++) {
    if (count == data[i].num_seccion) {
      x.au.push(data[i].aula);
      x.he.push(data[i].hora_entrada);
      x.hs.push(data[i].hora_salida);
      x.dias.push(data[i].dia);
    } else {
      if(count > 0) {
        r.push(x);
      };
      count = data[i].num_seccion;
      x = {};
      x.p = data[i].profesor;
      x.dias = new Array(data[i].dia);
      x.s = data[i].num_seccion;
      x.a = data[i].nombre;
      x.au = new Array(data[i].aula);
      x.he = new Array(data[i].hora_entrada);
      x.hs = new Array(data[i].hora_salida);
    };
    if (i == data.length - 1) {
      r.push(x);
    }
  };
  return r;
}

module.exports = constructorData;
