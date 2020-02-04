import React from 'react'
export default class SignUp extends React.Component {
    render() {
      return (
        <div className="App">
          
          <div className="input-container">
            <input type="text" placeholder="Username"/>
            <i class="zmdi zmdi-account zmdi-hc-lg"></i>
          </div>
          
          <div className="input-container">
            <input type="password" placeholder="Password"/>
            <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
          </div>
          
          <button type="submit">sign up</button>
        </div>
      )
    }
  }
  
