import { Component } from "react";
export default class DateTime extends Component {
 constructor(props) {
    super(props);
    const currentDate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    this.state={
   newdate: formattedDate,   
   time: new Date().toLocaleTimeString()
    }
 }
 componentDidMount() {
   this.TimerId = setInterval (()=>this.tick(),1000)
 }
 componentWillUnmount() {
    clearInterval(this.TimerId)
 }

 tick() {
    this.setState({
        time: new Date().toLocaleTimeString()     
    })
 }

 render() {
   return(
      <div>
      <div className="date_time">
      <div>
      <h2>СЕГОДНЯ:</h2>
      </div>     
         <div>
      <p className="time">{ this.state.newdate }</p>
      </div>
      <div>
       <p className="time1">{ this.state.time }</p>
       </div>
       </div>
       </div>
   )
}           
}