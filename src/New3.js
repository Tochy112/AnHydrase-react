import React, { Component } from 'react'

export default class New3 extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this)      
      }

      handleClick(){
        this.setState( prevState =>({
            isToggleOn: !prevState.isToggleOn

        }))
      }
    

  render() {
    return (
      <div>

        <button type='button' style={{width: '100px', height: '50px'}} 
        
        onClick={this.handleClick}>{this.state.isToggleOn? 'ON': 'OFF'}</button>

        {/* assignment */}
        {/* create a login firm component, insert a button that alerts('save password?') */}
                
      </div>
    )
  }
}
