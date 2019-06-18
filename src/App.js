import React, { Component } from 'react'
import './App.css'
import './modal/modal.css'

import Modal from './modal/modal'
import Calendar from './Calendar/Calendar'
import SaveEvent from './features/saveEvent'
import db from './features/db'

const style = {
  position: 'relative',
  margin: '50px auto',
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShowing: false,
      inputValue: '',
      selectedDay: null,
    }
  }

  openModalHandler = (e, selectedDay) => {
    console.log('day:', selectedDay)
    this.setState({
      selectedDay,
      isShowing: true,
    }, () => {
      this.eventInput.value = db.get(selectedDay)
      this.eventInput.focus()
    })
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    })
  }

  saveModalHandler = () => {
    db.set(this.state.selectedDay, this.eventInput.value)
    this.setState({
      inputValue: this.eventInput.value,
      isShowing: false,
    })
  }

  render() {
    return (
      <div>
        <Calendar
          style={style}
          width="1120px"
          onDayClick={(e, day) => this.openModalHandler(e, day)}
        />
        <Modal
          show={this.state.isShowing}
          close={this.closeModalHandler}
          save={this.saveModalHandler}
          day={this.selectedDay}
        >
          <input
            type="text"
            placeholder="Enter a new event"
            ref={ref => (this.eventInput = ref)}
          />{' '}
        </Modal>
        <SaveEvent />
      </div>
    )
  }
}

export default App
