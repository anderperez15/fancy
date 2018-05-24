import React from 'react';
import Dpdf from './dpdf';

 const Tabla = props => {
	return(
	<div className='table-responsive' id={props.id} style={{marginBottom:'20px'}}>
    <table className='table table-bordered' style={{minWidth:'700px',overflow:'auto'}}>
  		<colgroup>
		  <col width="29%" />
		  <col width="30%" />
		  <col width="7%" />
		  <col width="7%" />
		  <col width="8%" />
		  <col width="19%" />
		</colgroup>
		<caption>horario numero {props.num}</caption>
  	  <thead style={{background:'#403fb3',color:'white'}}>
  	    <tr><th>Asignatura</th><th>Profesor</th><th>Secc</th><th>Dia</th><th>Aula</th><th>Horario</th></tr>
  	  </thead>
  	  <tbody>
        {props.h.map((m) =>{
            return(
                m.he.map((ele,i)=>{return (<tr key={i}><td><small>{i==0?m.a:null}</small></td><td><small>{i==0?m.p:null}</small></td><td><small>{i==0?m.s:null}</small></td><td><small>{m.dias[i]}</small></td><td><small>{m.au[i]}</small></td><td><small>{ele} a {m.hs[i]}</small></td></tr>)})                   
            )
        })}   
     </tbody>
    </table> 
  </div> 	
  )    
};

export default Tabla;
