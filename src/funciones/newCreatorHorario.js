const newCreatorHorario = data => {
    let x = data;
    let continuar;
    let respuesta = [];
    let p = x.length;
    let alfa = [];
    let c = 1;
    let ok;
    for (var sos = 0 ; sos < p ; sos++){
        c *= x[sos].opciones.length;
        alfa[sos] = 0;
    };
    for (var l = 0; l < c; l++){
        continuar = true;
        for(var numb = 0; numb < (p - 1) ; numb++){
            for(var go = 1 ; go < p ; go++){
                if(numb == go){
                    continue;
                };
                for (var n = 0; n < x[numb].opciones[alfa[numb]].e_t.length ;n++){
                    for (var s = 0; s < x[go].opciones[alfa[go]].e_t.length ;s++){
                        if (x[numb].opciones[alfa[numb]].e_t[n].dia == x[go].opciones[alfa[go]].e_t[s].dia){
                            if (((x[numb].opciones[alfa[numb]].e_t[n].he <= x[go].opciones[alfa[go]].e_t[s].he) && ( x[go].opciones[alfa[go]].e_t[s].he <= x[numb].opciones[alfa[numb]].e_t[n].hs)) || ((x[numb].opciones[alfa[numb]].e_t[n].he >=  x[go].opciones[alfa[go]].e_t[s].he) && (x[numb].opciones[alfa[numb]].e_t[n].he <= x[go].opciones[alfa[go]].e_t[s].hs))){
                                continuar = false;
                            }
                        }
                    }
                }
            }
        }
        if(continuar){
            var h = new Array();
            for (var u = 0; u < p; u++){
                h.push({e_t:x[u].opciones[alfa[u]].e_t,seccion: x[u].opciones.seccion,profesor:x[u].profesor});
            }
            respuesta.push(h);    
        }
        ok = true;
        for (var y = p - 1; y > 0 ; y--){
            if(ok){
                 alfa[p - 1] += 1;
            }
            if(alfa[y] >= x[y].length){
                alfa[y] = 0;
                alfa[y - 1] += 1;
            }
            ok = false;
        }
        console.log(respuesta)
    }
    return respuesta;
}

export default newCreatorHorario;
