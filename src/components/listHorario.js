import Tabla from './Tabla';
import React from 'react';
import Li from './li';
import Dpdf from './dpdf'
import { findDOMNode } from 'react-dom';
import $ from 'jquery';


class ListHorario extends React.Component{
  constructor (props){
    super (props);
    this.state = {
      horarios:[],
      pg      :0,
      numb    :1
    }
    this.next = this.next.bind(this);
    this.pdf = this.pdf.bind(this);
  }
  pdf(a){
    let source = $('#h'+a)[0];
    console.log(source)        
    let pdf = new jsPDF('landscape', 'px', 'legal')
      pdf.text(20, 20, 'Hosting por metr0!')
      let specialElementHandlers = {
        '#bypassme': function(element, renderer){
             return true
        }
      }
      let margins = {
        top   : 20,
        bottom: 20,
        left  : 20,
        width : 700
      }
      pdf.fromHTML(
        source
        , margins.left
        , margins.top
        , {
          'widths': margins.width
          ,'elementHandlers': specialElementHandlers
        },
        function (dispose) {
          pdf.save('Test.pdf');
        },
        margins
      )
    }
  next(id){
    document.body.scrollTop=0;
    switch(id){
      case 'next':
        let x = this.state.pg + 1
        this.setState({pg:x,numb:1})
      break;
      case 'back':
        let y = this.state.pg - 1
        this.setState({pg:y,numb:1})
      break;
      default:
        this.setState({numb:id})
      break;
    }
  }
  render(){
    let trozo = this.props.h.slice(this.state.numb*10 + this.state.pg*50 - 10,this.state.numb*10 + this.state.pg*50)
    let inercia = (this.props.h.length-this.props.h.length%10)/10
    if(this.props.h.length%10){
      inercia += 1;
    }
    return(
      <div style={{maxWidth:'720px',margin:'auto'}}>
        <h1 style={{textAlign:'center',paddingBottom:40+'px'}}>Usted tiene {this.props.h.length} {this.props.h.length>1?"posibles horarios":"horario posible"}:</h1>
          <button className="btn btn-default" onClick={this.props.r.bind(null)}><span className="glyphicon glyphicon-cog"></span> Regresar
          </button>
        <div style={{textAlign:'center'}}>
          <ul className="pagination" style={{cursor:'pointer'}}>
          {this.state.pg>0?<Li key='back' id='back' name="&laquo;" onClick={this.next} />:null}
              {[1,2,3,4,5].map((elm) =>{
                if ((elm*10 + this.state.pg*50) <= inercia*10){
                  return(
                    <Li clase={this.state.numb==elm?"active":null} key={elm} id={elm} name={elm + this.state.pg*5} onClick={this.next} />
                  )
                }
              }
            )}
            {(this.props.h.length > (this.state.pg+1)*50)?<Li key='next' name="&raquo;" id='next' onClick={this.next} />:null}
          </ul>
        </div>
        <div>
          {trozo.map(
           (p,i) =>{return(
           <div  key={i}>
            <Dpdf id={i} desc={this.pdf} />
            <Tabla id={"h"+i}  h = {p} num={i+1+(this.state.numb-1)*10+this.state.pg*50}/>
            </div>
          )}
           
          )}
        </div>
        <div style={{textAlign:'center'}}>
          <ul className="pagination" style={{cursor:'pointer'}}>
          {this.state.pg>0?<Li key='back' id='back' name="&laquo;" onClick={this.next} />:null}
              {[1,2,3,4,5].map((elm) =>{
                if ((elm*10 + this.state.pg*50) <= inercia*10){
                  return(
                    <Li clase={this.state.numb==elm?"active":null} key={elm} id={elm} name={elm + this.state.pg*5} onClick={this.next} />
                  )
                }
              }
            )}
            {(this.props.h.length > (this.state.pg+1)*50)?<Li key='next' name="&raquo;" id='next' onClick={this.next} />:null}
          </ul>
        </div>
      </div>
    )
  }
};

export default ListHorario;

