import React from 'react';

const Li = props =>{
  console.log(props.id)
  return(
    <li className={props.clase} onClick={props.onClick.bind(null,props.id)}>
      <a>{props.name}</a>
    </li>
  )         
};

export default Li;
