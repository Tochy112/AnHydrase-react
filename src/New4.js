import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' 


export default class New4 extends Component {

    submit = (e) =>{
        e.preventDefault()
        confirmAlert({
            title: 'Save password?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => alert('saved succesfully')
              },
              {
                label: 'No',
                onClick: () => alert('Not saved')
              }
            ]
          })
        
    }

  render() {
    return (
      <div>
        <form>
            <legend>Sign up</legend>
            <label for="">Name</label>
            <input type="text" placeholder='Name' name='username' ></input>

            <label for="">Email</label>
            <input type="email" placeholder='Email' name='email'></input>

            <label for="">Password</label>
            <input type="password" placeholder='Password' name='password'></input>

            <div className='container'>
                <button type='submit' onClick={this.submit}>OK</button>
            </div>
        </form>
        
      </div>
    )
  }
}
