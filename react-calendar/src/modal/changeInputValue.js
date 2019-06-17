import React from "react"

class addEvent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      };
    }
  
    render() {
      return (
        
        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
        
      );
    }
  
    updateInputValue(evt) {
      this.setState({
        inputValue: evt.target.value
      });
    }
  }

  export default addEvent