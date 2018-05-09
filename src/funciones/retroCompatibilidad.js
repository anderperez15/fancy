/*Se encarga de verificar si una materia fue
    añadida o existe una materia requisito
*/
const a = ( codigo ,pensum, codigos ) => {
    var i = [];
    var materias = pensum.semestres;
    for (let n = 0; n < materias.length; n++){
        for (let u = 0; u < materias[n].materias.length; u++){
            if(codigo.some(cod => cod == materias[n].materias[u].codigo && materias[n].materias[u].requisitos.length>0)){
                i = i.concat(materias[n].materias[u].requisitos);
            }
        }
    }
    codigos=codigos.concat(i);
    if( i.length > 0 ){
         return a(i,pensum,codigos)
    }
    return codigos;
};

const retroCompatibilidad = ( materia_e, materias_cart=[], pensum ) => {
    let codigos;
    if (!materias_cart.length){
        return false;
    }
    let code = materias_cart.map(obj=>obj.codigo);
    let ok = a(code,pensum,[])
    if(materia_e.requisitos.length){
         codigos = a(materia_e.requisitos,pensum,[]);
        codigos=codigos.concat(materia_e.requisitos);
    }else{
        codigos = [];
    }
    codigos.push(materia_e.codigo);
    if(codigos.some( cod => materias_cart.some(mc => mc.codigo == cod)) || ok.some(obj => obj == materia_e.codigo)){
        return true;
    }else{
        return false;
    }
};

export default retroCompatibilidad;
