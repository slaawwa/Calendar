import React, {Component} from 'react';
import './App.css';
import './modal/modal.css'

import Modal from './modal/modal'
import Calendar from './Calendar/Calendar'
import addEvent from './modal/changeInputValue'

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



render () {
    return (
        <div>
          <Calendar style={style} width="1120px" 
                onDayClick={(e, day)=> this.openModalHandler(e, day)}/>
          <Modal
                className="modal"
                show={this.state.isShowing}
                close={this.closeModalHandler}
                save={this.updateInputValue}
                day={this.selectedDay}>
                 <input type="textarea" onChange={e => {
            this.setState({
              inputValue: e.target.value
            });
          }}/>
            </Modal>
        </div>
    );
    
}

}



export default App
