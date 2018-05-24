import React from 'react';

const Dpdf = props =>{
  return(
    <div>
      <span style={{display:"inline-block"}} className="glyphicon glyphicon-save-file"></span><p style={{display:"inline-block",cursor:'pointer'}}  onClick={props.desc.bind(null, props.id)}>Descargar</p>
    </div>
  )
};

export default Dpdf;
