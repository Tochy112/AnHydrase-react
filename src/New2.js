import React, { Component } from 'react'

export default class New2 extends Component {
    constructor(props) {
        super(props);
        this.state = {message: "WELCOME TO MY PAGE"};
      }

      componentDidMount(){
        console.log('yes');
      }
      componentWillUnmount(){
        console.log('yes it did');
      }

      update = () =>{
        this.setState({
            message: "This tag has been updated"
        });
    }
    

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.update}>click to update</button>
      </div>
    )
  }
}

