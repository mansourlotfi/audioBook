import React from 'react';
import Bg from '../../assets/home/bg3.jpg'


const bodyStyle = {
    backgroundImage: "url(" + Bg + ")",
      height: '900px',
  }
export default class Login extends React.Component {
    
    render() {
      return (
        <div className="App" style={bodyStyle}>
          
          <div className="input-container">
            <input type="text" placeholder="Username"/>
            <i class="zmdi zmdi-account zmdi-hc-lg"></i>
          </div>
          
          <div className="input-container">
            <input type="password" placeholder="Password"/>
            <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
          </div>
          
          <button type="submit">Log In</button>
        </div>
      )
    }
  }
  
