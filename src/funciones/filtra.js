const dia = [
  'Lun',
  'Mar',
  'Mier',
  'Jue',
  'Vie'
]

const filtra = (data,horarios) => {
  let respuesta = horarios.filter(
    h => {
      return(h.every( a => data.profesores.every( p => p != a.p)));
    }
  );
  let n = [];
  for (let i = 0; i < data.dias.length; i++){
    if(data.dias[i] == 'No quiero ver clases'){
      n.push(dia[i]);
    }
  }
  respuesta = respuesta.filter(
    h =>{
      return(h.every(m => m.dias.every(d => n.every(u => u!=d.trim()))))
   }
  )
  let tramo;
  if(data.dias.length > 0){
    for (let n= 0;n < dia.length; n++){
      if( data.dias[n] != 'No quiero ver clases' && data.dias[n] != 'Cualquier hora del dia') {
        tramo = data.dias[n].split(' a ');
        respuesta=respuesta.filter(
          h => h.every(
            m => {
              let x = [];
              for(let i=0;i<m.dias.length;i++){
                if(dia[n] == m.dias[i].trim()){
                  let r = (m.he[i] >= tramo[0] && m.he[i] < tramo[1] && m.hs[i]>tramo[0] && m.hs[i] <= tramo[1]);
                  x.push(r);
                } else {
                  x.push(true)
                }
              }
              return x.every(l=>l==true)
            }
          )
        )
      }
    }
  }
  if(respuesta.length==0){
   alert('no existe ningun horario con esta especificacion')
  };
  return respuesta;
};

export default filtra;
