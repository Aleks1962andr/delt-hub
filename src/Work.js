import { Component } from "react";
import foto from './notepad.png'
import image from './backspace.png'

export class Work extends Component{
    constructor(props) {
        super(props);
        this.state={
          userInput:"",
          doings:[]  
        }
    }

    onChangeEvent(e) {
  
this.setState({userInput:e})
    } 
    addItem(input) {
         if (input==='') {
             return false;
                }    
      else{  
        let listArray = this.state.doings;
        listArray.push(input);
        this.setState({doings:listArray,userInput:""})
             }
    }
         deleteItem(index) {
        let updatedDoings = [...this.state.doings];
        updatedDoings.splice(index, 1);
        this.setState({ doings: updatedDoings }, () =>{
          const labels = document.querySelectorAll('.crossed');
          labels.forEach(label => label.classList.remove('crossed'))  
        });
      }
      crossedWord(event) {
        const labl = event.target;
        labl.classList.toggle('crossed')
     }      
     onFormSubmit(e) {
      e.preventDefault();
       }

    render(){
        return(
            <div>
 <form onSubmit={this.onFormSubmit}>             
            <div className="container">
<input type="text" placeholder="Список дел на день"
// onChange={this.onChangeEvent}
onChange={(e)=>{this.onChangeEvent(e.target.value)}}
value={this.state.userInput}
maxLength={30}
/>
</div>
<div className="container">
     <button onClick={()=>this.addItem(this.state.userInput)} className="btn add">Add</button>    
</div>
<ul>
  {this.state.doings.map((item,index)=> (
    <li key={index}>
     <label onClick={this.crossedWord}><img src={foto} width="20px" alt='icon' /> ЗАДАЧА №{index+1}</label>
     {item}
     <botton onClick={()=>this.deleteItem(index)} className="btnDel"><img src={image} width="20px" alt='icon' /></botton>
     </li>
  ))}  
</ul>
</form> 
</div>

        );
    }
}
