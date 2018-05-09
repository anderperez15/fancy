const creatorHorario = data => {
    let x = JSON.parse(data);
    let continuar;
    let respuesta = [];
    let p = x.length;
    let alfa = [];
    let c = 1;
    let ok;
    if(x != false){
        for (var sos = 0 ; sos < p ; sos++){
            c *= x[sos].length;
        }
        for (var z = 0; z < p ; z++){
            alfa[z] = 0;
        }
        for (var l = 0; l < c; l++){
            var continuar = true;
            for(var numb = 0; numb < (p - 1) ; numb++){
                for(var go = 1 ; go < p ; go++){
                    if(numb == go){
                        continue;
                    }
                    for (var n = 0; n < x[numb][alfa[numb]].he.length ;n++){
                        for (var s = 0; s < x[go][alfa[go]].he.length ;s++){  
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
                var h = new Array();
                h.codigo = alfa.map(function(a){return a+1}).join('-');
                for (var u = 0; u < p; u++){
                    h.push(x[u][alfa[u]]);
                }
                respuesta.push(h);    
            }
            var ok = true;
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
        }
    }
    return respuesta;
};

export default creatorHorario;
