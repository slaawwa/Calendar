import React, {Component} from 'react';
import './App.css';


import Calendar from './Calendar/Calendar'

const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends Component {
  onDayClick = (e, day) => {
    alert(day);
  }
  
    render() {
  return (
    <div>
     <Calendar style={style} width="1120px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>
     </div>
)
}
}

export default App
