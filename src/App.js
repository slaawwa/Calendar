import React, {Component} from 'react';
import './App.css';
import './modal/modal.css'

import Modal from './modal/modal'
import Calendar from './Calendar/Calendar'
import SaveEvent from './features/saveEvent'

const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends Component {
  constructor() {
    super();

    this.state = {
        isShowing: false
    }
    this.state = {
      inputValue: ''
    }
}

openModalHandler = () => {
    this.setState({
        isShowing: true
    });
}

closeModalHandler = () => {
    this.setState({
        isShowing: false
    });
}

saveModalHandler = () => {
  
}



render () {
    return (
        <div>
          <Calendar style={style} width="1120px" 
                onDayClick={(e, day)=> this.openModalHandler(e, day)}/>
          <Modal
                show={this.state.isShowing}
                close={this.closeModalHandler}
                save={this.saveModalHandler}
                day={this.selectedDay}>
                 <input type="text" placeholder="Enter a new event" ref={(ref) => this.eventInput = ref}/>            </Modal>
          <SaveEvent/>
        </div>
    );
    
}

}



export default App
