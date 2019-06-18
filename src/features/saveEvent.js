import React, { Component } from 'react'

class SaveEvent extends Component {
  constructor(props) {
    super()

    this.state = {
      events: [],
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (this.eventInput !== null) {
      this.setState({
        events: this.state.events.concat(this.eventInput.value),
      })
    }
  }

  render() {
    let events = this.state.events.map(events => {
      return <li>{events}</li>
    })
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-2">
          <br />
          <input
            type="text"
            placeholder="Enter event"
            ref={ref => (this.eventInput = ref)}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <br />
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleClick}
          >
            Add
          </button>
        </div>
        <br />

        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <ol>{events}</ol>
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default SaveEvent
