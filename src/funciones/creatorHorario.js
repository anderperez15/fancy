//Se encaraga de crear el horario
const creatorHorario = (data, materias) => {
  if(data.some(obj => obj.length == 0)) {
    let n = [];
    for (let x = 0; x < data.length; x++) {
      if (data[x].length == 0){
        n.push(x);
      };
    }
    let r = materias.filter((o,i) => n.some(obj => obj == i)).map(obj => obj.nombre)
    alert(`${r.length>1?'las materias':'la materia'} ${r.join(',')} no ${r.length>1?'fueron ofertadas':'fue ofertada'} este semestre!`)
    return [];
  }
  let x = data;
  let continuar;
  let respuesta = [];
  let p = x.length;
  let alfa = [];
  let c = 1;
  let ok;
  if(x != false){
    for (let sos = 0 ; sos < p ; sos++){
      c *= x[sos].length;
    }
    for (let z = 0; z < p ; z++){
      alfa[z] = 0;
    }
    for (let l = 0; l < c; l++){
      continuar = true;
      for(let numb = 0; numb < (p - 1) ; numb++){
        for(let go = 1 ; go < p ; go++){
          if(numb == go){
            continue;
          }
          for (let n = 0; n < x[numb][alfa[numb]].he.length ;n++){
            for (let s = 0; s < x[go][alfa[go]].he.length ;s++){
              if (x[numb][alfa[numb]].dias[n] == x[go][alfa[go]].dias[s]){
                if (((x[numb][alfa[numb]].he[n] <= x[go][alfa[go]].he[s]) && (x[go][alfa[go]].he[s] <= x[numb][alfa[numb]].hs[n])) || ((x[numb][alfa[numb]].he[n] >= x[go][alfa[go]].he[s]) && (x[numb][alfa[numb]].he[n] <= x[go][alfa[go]].hs[s]))){
                continuar = false;
                }
              }
            }
          }
        }
      }
      if(continuar){
        let h = new Array();
        for (let u = 0; u < p; u++){
          h.push(x[u][alfa[u]]);
        }
        respuesta.push(h);
      }
      ok = true;
      for (let y = p - 1; y > 0 ; y--){
        if(ok){
          alfa[p - 1] += 1;
        }
        if(alfa[y] >= x[y].length){
          alfa[y] = 0;
          alfa[y - 1] += 1;
        }
        ok = false;
      }
    }
  }
  return respuesta;
}

export default creatorHorario;
